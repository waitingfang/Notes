//封装判断数据类型的方法
//如果obj不是对象 typeof操作符 如果obj是对象 toString [object Object]
function type(obj) {
	let typeMap = {};
	"Null Object Array Date RegExp Function".split(" ").forEach((item, index) => {
		typeMap["[object " + item + "]"] = item.toLowerCase();
	});
	if( typeof obj == null) {
		return null + "";
	}
	return typeof obj === "object" || typeof obj === "function"? typeMap[Object.prototype.toString.call(obj)] : typeof obj;
}
