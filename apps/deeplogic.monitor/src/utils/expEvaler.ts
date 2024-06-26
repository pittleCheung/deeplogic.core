/**
 * 表达式执行类
 */
class ExpEvaler {
	static #paraRegex = /\$\{\s*([^\}]+)\s*\}/gm;

	evalCore(exp, paras) {
		const matchs = exp.matchAll(ExpEvaler.#paraRegex);

		for (const k in paras) {
			this[k] = paras[k];
		}

		if (matchs) {
			for (const m of matchs) {
				exp = exp.replace(m[0], `this['${m[1]}']`);
			}
		}

		try {
			return { success: true, result: eval(exp) };
		} catch (err) {
			return { success: false, result: undefined, message: err.message };
		}
	}

	/**
	 * 检查表达式是否有效
	 * @param {string} exp javascript表达式
	 */
	static check(exp) {
		const paras = {};
		const matchs = exp.matchAll(ExpEvaler.#paraRegex);
		if (matchs) {
			for (const m of matchs) {
				paras[m[1]] = 1;
			}
		}
		const { success, _ } = new ExpEvaler().evalCore(exp, paras);
		return success;
	}

	/**
	 * 执行表达式，并返回结果
	 * @param {string} exp javascript表达式
	 * @param {object} paras 参数数据对象
	 * @returns any 执行不成功时返回 undefined
	 */
	static eval(exp, paras) {
		const { _, result } = new ExpEvaler().evalCore(exp, paras);
		return result;
	}
}
export default ExpEvaler;