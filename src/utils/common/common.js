/*
 * 公用JS方法
 * 使用大驼峰命名规范
*/
import Cookie from 'js-cookie';
/**
 * @desc 操作cookie
 * @param {type} set设置, get获取, remove移除
 * @param {name} cookie 别名
 * @param {data} cookie 数据
 * @param {time} cookie 过期时间
 * @param {Path} cookie 路径
 */
export function HandleCookie(type, name, data, time, Path) {
    if (Path) {
        if (type == 'set' && name && data) {
            Cookie.set(name, data, { expires: time, path: Path });
        } else if (type == 'get' && name && !data) {
            return Cookie.getJSON(name);
        } else if (type == 'remove' && name && data && time && Path) {
            Cookie.remove(name, { path: Path });
        }
    } else {
        if (type == 'set' && name && data) {
            Cookie.set(name, data, { expires: time });
        } else if (type == 'get' && name && !data) {
            return Cookie.getJSON(name);
        } else if (type == 'remove' && name && !data) {
            Cookie.remove(name);
        }
    }
}
/**
 * @desc 格式化时间
 * @param {time} 需要格式化的时间
 * @param {cFormat} 格式化的规则 {y}-{m}-{d} {h}:{i}:{s} {a} 或 {y}-{m}-{d} {h}:{i}:{s}
 */
export function FormatTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        if (formatObj.a == 0) formatObj.a = 7;
        let value = formatObj[key];
        if (key === 'a') return ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][value - 1];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return time_str;
}
/**
 * @desc 获取地址中的查询参数，输出对象
 * @param {url} 地址连接（可不传，即为当前地址）
 */
export function GetUrlQuery(url) {
    url = url == null ? window.location.href : url;
    const search = url.substring(url.lastIndexOf('?') + 1);
    const queryObj = {};
    const reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1);
        let val = decodeURIComponent($2);
        val = String(val);
        queryObj[name] = val;
        return rs;
    });
    return queryObj;
}

/**
 * @desc 数组去重
 * @param {arr} 需要去重的数组
 * @returns {array} 去重后的数组
 */
export function Unique(arr) {
    let result = [], json = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]); //返回没被删除的元素
        }
    }
    return result;
}
/**
 * @desc 字母大小写转换
 * @param {str} 需要转换的字符串
 * @param {type} {字符串} 1-首字母大写 2-首字母小写 3-大小写转换 4-全部大写 5-全部小写
 * @returns {String} 转换后的字符串
 */
export function ChangeCase(str, type) {
    function ToggleCase(str) {
        let itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                } else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                } else {
                    itemText += item;
                }
            });
        return itemText;
    }
    switch (type) {
        case '1':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case '2':
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case '3':
            return ToggleCase(str);
        case '4':
            return str.toUpperCase();
        case '5':
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * @desc 判断是否为空
 * @param {val}
 * @returns {boolean} 
 */
export function Validatenull(val) {
    if (typeof val == 'boolean') {
        return false;
    }
    if (typeof val == 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
        return false;
    }
    return false;
}

/**
 * @desc 格式化时间 类似微信聊天
 * @param {tiem}
 * @returns {String} 
 */

var _formatDate = function (date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/**
* 仿照微信中的消息时间显示逻辑，将时间戳（单位：毫秒）转换为友好的显示格式.
*
* 1）7天之内的日期显示逻辑是：今天、昨天(-1d)、前天(-2d)、星期？（只显示总计7天之内的星期数，即<=-4d）；
* 2）7天之外（即>7天）的逻辑：直接显示完整日期时间。
*
* @param  {[long]} timestamp 时间戳（单位：毫秒），形如：1550789954260
* @param {boolean} mustIncludeTime true表示输出的格式里一定会包含“时间:分钟”
* ，否则不包含（参考微信，不包含时分的情况，用于首页“消息”中显示时）
*
* @return {string} 输出格式形如：“刚刚”、“10:30”、“昨天 12:04”、“前天 20:51”、“星期二”、“2019/2/21 12:09”等形式
* @author 即时通讯网([url=http://www.52im.net]http://www.52im.net[/url])
* @since 1.1
*/
export function FormatChatTime(timestamp, mustIncludeTime) {

    // 当前时间
    var currentDate = new Date();
    // 目标判断时间
    var srcDate = new Date(parseInt(timestamp));

    var currentYear = currentDate.getFullYear();
    var currentMonth = (currentDate.getMonth() + 1);
    var currentDateD = currentDate.getDate();

    var srcYear = srcDate.getFullYear();
    var srcMonth = (srcDate.getMonth() + 1);
    var srcDateD = srcDate.getDate();

    var ret = "";

    // 要额外显示的时间分钟
    var timeExtraStr = (mustIncludeTime ? " " + _formatDate(srcDate, "hh:mm") : "");

    // 当年
    if (currentYear == srcYear) {
        var currentTimestamp = currentDate.getTime();
        var srcTimestamp = timestamp;
        // 相差时间（单位：毫秒）
        var deltaTime = (currentTimestamp - srcTimestamp);

        // 当天（月份和日期一致才是）
        if (currentMonth == srcMonth && currentDateD == srcDateD) {
            // 时间相差60秒以内
            if (deltaTime < 60 * 1000)
                ret = "刚刚";
            // 否则当天其它时间段的，直接显示“时:分”的形式
            else
                ret = _formatDate(srcDate, "hh:mm");
        }
        // 当年 && 当天之外的时间（即昨天及以前的时间）
        else {
            // 昨天（以“现在”的时候为基准-1天）
            var yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            // 前天（以“现在”的时候为基准-2天）
            var beforeYesterdayDate = new Date();
            beforeYesterdayDate.setDate(beforeYesterdayDate.getDate() - 2);

            // 用目标日期的“月”和“天”跟上方计算出来的“昨天”进行比较，是最为准确的（如果用时间戳差值
            // 的形式，是不准确的，比如：现在时刻是2019年02月22日1:00、而srcDate是2019年02月21日23:00，
            // 这两者间只相差2小时，直接用“deltaTime/(3600 * 1000)” > 24小时来判断是否昨天，就完全是扯蛋的逻辑了）
            if (srcMonth == (yesterdayDate.getMonth() + 1) && srcDateD == yesterdayDate.getDate())
                ret = "昨天" + timeExtraStr;// -1d
            // “前天”判断逻辑同上
            else if (srcMonth == (beforeYesterdayDate.getMonth() + 1) && srcDateD == beforeYesterdayDate.getDate())
                ret = "前天" + timeExtraStr;// -2d
            else {
                // 跟当前时间相差的小时数
                var deltaHour = (deltaTime / (3600 * 1000));

                // 如果小于或等 7*24小时就显示星期几
                if (deltaHour <= 7 * 24) {
                    var weekday = new Array(7);
                    weekday[0] = "星期日";
                    weekday[1] = "星期一";
                    weekday[2] = "星期二";
                    weekday[3] = "星期三";
                    weekday[4] = "星期四";
                    weekday[5] = "星期五";
                    weekday[6] = "星期六";

                    // 取出当前是星期几
                    var weedayDesc = weekday[srcDate.getDay()];
                    ret = weedayDesc + timeExtraStr;
                }
                // 否则直接显示完整日期时间
                else
                    ret = _formatDate(srcDate, "yyyy/M/d") + timeExtraStr;
            }
        }
    }
    // 往年
    else {
        ret = _formatDate(srcDate, "yyyy/M/d") + timeExtraStr;
    }

    return ret;
}