import * as service from './service';
import { message } from 'antd';

class AutoCompletion {
  autoComplete() {
    // eslint-disable-next-line no-throw-literal
    throw 'Not implemented!';
  }
}

export default class JavaScriptAutoComplete extends AutoCompletion {
  constructor(environment = {}) {
    super();
    this.defaultFunctions = environment.functions ? environment.functions : [];
    this.defaultVariables = environment.variables ? environment.variables : [];
    this.prependSource = environment.prependSource ? environment.prependSource + '\n\n' : '';

    if (!environment.disableAutoLoad) {
      for (const name in window) {
        const val = window[name];
        if (typeof val === 'function') {
          // let matchParams = val.toString().match(/\([^)]*\)/)
          // matchParams = matchParams ? matchParams[0].substring(1).substring(0,matchParams[0].length-2) : null

          this.defaultFunctions.push({
            name: name,
            // paramsLength: val.length,
            // params: matchParams ? matchParams.split(",").map(a=>a.trim()) : []
          });
        } else this.defaultVariables.push(name);
      }
    }
  }

  analyseCode(value) {
    const variables = [];
    const functions = [...this.defaultFunctions];

    const val = this.prependSource + value;
    for (const varRes of val.matchAll(/(^| |\n)(const|let|var) (\s*?)([A-Za-z0-9_$]*)(\s*?)(=|;|\n|$)/gm)) variables.push(varRes[4]);

    for (const varRes of val.matchAll(/(^|;(\s*)?|\n)(class) (\s*?)([A-Za-z0-9_$]*)(\s*?)(extends (\s*?)[A-Za-z0-9]*)?(\s*?)({|\n|$)/gm))
      variables.push(varRes[5]);

    for (const varRes of val.matchAll(/(^|;(\s*)?|\n)(function) (\s*?)([A-Za-z0-9_$]*)(\s*?)((\s*?)(\(([^(]*))\))(\s*?){/gm)) {
      let params = varRes[10].split(',').map((a) => a.trim());
      if (params[0] === '') params = [];
      functions.push({
        params: params,
        paramsLength: params.length,
        name: varRes[5],
      });
    }
    return { variables, functions };
  }

  async autoComplete(word, editor) {
    let ret = [];
    const searchWord = word.replaceAll(/\(|{|;/g, '');

    if (searchWord === '') return [];

    const { variables, functions } = this.analyseCode(editor.value);

    //  自定义提示内容
    if (word) {
      // 最后一个word, 点号分割
      const lastWord =
        word
          .split('.')
          .pop()
          .toLowerCase() || '';

      // 只在hvac和.关键词下查询提示内容
      if (word.startsWith('hvac') && word.endsWith('.')) {
        JavaScriptAutoComplete.DATA = await getSuggestByKey(word.slice(0, -1));
      }
      if (word.startsWith('.')) JavaScriptAutoComplete.DATA = [];

      // 清除自定义关键字数据
      document.querySelector('#code-editor > textarea').addEventListener('keydown', ({ key }) => {
        if (key === 'Backspace') JavaScriptAutoComplete.DATA = [];
        if (key === 'Enter') JavaScriptAutoComplete.DATA = [];
      });

      // 清除自定义关键字数据
      document.querySelector('#code-editor > textarea').addEventListener('click', () => {
        JavaScriptAutoComplete.DATA = [];
      });

      try {
        for (const iterator of JavaScriptAutoComplete.DATA) {
          const { n, t } = iterator;
          const text = n.split('.').pop() || n;

          // 根据输入关键字筛选提示
          if (n.toLowerCase().indexOf(lastWord) > -1) {
            ret.push({
              text,
              type: t === 1 ? 'Device' : 'Point',
              replace: () => `${word.substring(0, word.lastIndexOf('.'))}.${text}`,
            });
          }
        }
      } catch (error) {
        message.error(error.message);
      }
    }

    for (const key of JavaScriptAutoComplete.KEYWORDS) {
      if (key.toLowerCase().startsWith(searchWord.toLowerCase()) && searchWord !== key) {
        ret.push({
          text: key,
          type: 'KEYWORD',
          replace: () => (key === 'hvac' ? key : `${key} `),
        });
      }
    }

    for (const key in JavaScriptAutoComplete.KEYWORDS_OWN_LOGIC) {
      if (key.toLowerCase().startsWith(searchWord.toLowerCase()) && searchWord !== key) {
        ret.push({
          text: key,
          type: 'KEYWORD',
          replace: () => key,
          ...JavaScriptAutoComplete.KEYWORDS_OWN_LOGIC[key](key),
        });
      }
    }

    variables.forEach((key) => {
      if (key.toLowerCase().startsWith(searchWord.toLowerCase()) && searchWord !== key) {
        ret.push({
          text: key,
          type: 'VARIABLE',
          replace: () => key,
        });
      }
    });

    functions.forEach((fn) => {
      if (fn.name.toLowerCase().startsWith(searchWord.toLowerCase()) && searchWord !== fn.name) {
        ret.push({
          text: fn.name,
          type: 'FUNCTION',
          replace: () => fn.name + '(' + (fn.paramsLength > 0 ? fn.params.join(', ') : '') + ')',
          cursorMove: fn.paramsLength > 0 ? -1 : 0,
        });
      }
    });

    //
    return ret.sort((a, b) => {
      // 判断 text 是否以关键字开头
      let startsWithA = a.text.toUpperCase().startsWith(word.toUpperCase()) ? 1 : 0;
      let startsWithB = b.text.toUpperCase().startsWith(word.toUpperCase()) ? 1 : 0;

      // 如果一个对象以关键字开头而另一个对象不是，将以关键字开头的对象排在前面
      if (startsWithA !== startsWithB) {
        return startsWithB - startsWithA;
      }

      // 计算每个text属性中关键字的出现次数
      let countA = (a.text.match(new RegExp(word, 'gi')) || []).length;
      let countB = (b.text.match(new RegExp(word, 'gi')) || []).length;

      // 如果关键字出现的次数不同，按照关键字出现的次数排序
      if (countA !== countB) {
        return countB - countA;
      }

      // 如果所有其他因素都相同，则按照字母顺序排序
      return a.text.localeCompare(b.text);
    });
  }
}

const getSuggestByKey = async (key) => {
  const response = await service.suggest(key);
  if (response) {
    return response;
  }
  return [];
};

JavaScriptAutoComplete.DATA = []; // Custom auto complete data
JavaScriptAutoComplete.FILE_EXTENSIONS = ['js'];
JavaScriptAutoComplete.KEYWORDS_OWN_LOGIC = {
  'function () {\n    \n}': (key) => ({
    text: 'function',
    cursorMove: -11,
    type: 'SHORTCUT',
  }),
  'if () {\n    \n}': (key) => ({
    text: 'if',
    replace: () => key,
    cursorMove: -10,
    type: 'SHORTCUT',
  }),
  'else if () {\n    \n}': (key) => ({
    text: 'else if',
    cursorMove: -10,
    type: 'SHORTCUT',
  }),
  'else {\n    \n}': (key) => ({
    text: 'else',
    cursorMove: -3,
    type: 'SHORTCUT',
  }),
  'console.log()': (key) => ({
    text: 'console.log(...)',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'LogEnable()': (key) => ({
    text: 'LogEnable',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'Log(msg)': (key) => ({
    text: 'Log',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'SetTagValue(name,value)': (key) => ({
    text: 'SetTagValue',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'SetValueAndCheckStatus(setting, status, value, waitTime, checkTimes)': (key) => ({
    text: 'SetValueAndCheckStatus',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'divide0(dividend, divisor)': (key) => ({
    text: 'divide0',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'min_n0(n1, n2, n3, ...n)': (key) => ({
    text: 'min_n0',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
  'max_n0(n1, n2, n3, ...n)': (key) => ({
    text: 'max_n0',
    cursorMove: -1,
    type: 'SHORTCUT',
  }),
};

JavaScriptAutoComplete.KEYWORDS = [
  'hvac',
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  // 'continue',
  // 'debugger',
  'default',
  'delete',
  'do',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'null',
  'package',
  'private',
  // 'protected',
  'public',
  'return',
  'super',
  'switch',
  'static',
  'this',
  'throw',
  'try',
  'true',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
];
