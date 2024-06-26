import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import CodeEditor from './editor';
import JavaScriptAutoComplete from './autoComplete';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import css from './code.module.less';

hljs.registerLanguage('javascript', javascript);

const Code = forwardRef(({value, style, bordered = false, onChange, onBlur, onFocus, className}, ref) => {
    const editor = useRef(null);
    const [scriptEditor, setScriptEditor] = useState(null);

    const initCode = () => {
        const codeEditor = new CodeEditor(editor.current)
            .setHighlighter((code) => hljs.highlight('javascript', code).value)
            .setAutoCompleteHandler(new JavaScriptAutoComplete());

        // Code Editor Event
        codeEditor.on('input', (value) => {
            onChange(value);
        }, 500);
        codeEditor.on('blur', (value) => {
            onBlur?.()
        }, 500);
        codeEditor.on('focus', (value) => {
            onFocus?.()
        }, 500);
        codeEditor.create();
        codeEditor.setValue(value || '');

        setScriptEditor(codeEditor);
    };

    useImperativeHandle(ref, () => ({
        clear() {
            if (scriptEditor) scriptEditor.setValue('');
        },
    }));

    useEffect(() => {
        initCode();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (scriptEditor) scriptEditor.setValue(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className={`${css['code-editor']} `}>
            <div
                id="code-editor"
                style={{...style}}
                ref={editor}
                className={`${bordered ? 'border' : ''} ${className}`}
            />
        </div>
    );
});

export default Code;
