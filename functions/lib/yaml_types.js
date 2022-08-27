"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectYamlType = exports.distResultPath = exports.srcFilesDirPath = exports.directoryName = exports.YamlType = void 0;
/**
 * もともと各種メソッドはnamespace内に入れていたんだけど、
 * 'namespace' and 'module' are disallowed
 * って言われたので脳死でexportした
 */
var YamlType;
(function (YamlType) {
    YamlType[YamlType["Proposal"] = 0] = "Proposal";
    YamlType[YamlType["Speaker"] = 1] = "Speaker";
    YamlType[YamlType["TimetableDay1"] = 2] = "TimetableDay1";
    YamlType[YamlType["TimetableDay2"] = 3] = "TimetableDay2";
    YamlType[YamlType["TimetableDay3"] = 4] = "TimetableDay3";
    YamlType[YamlType["Unknown"] = 5] = "Unknown";
})(YamlType = exports.YamlType || (exports.YamlType = {}));
function directoryName(type) {
    switch (type) {
        case YamlType.Proposal:
            return "proposals/";
        case YamlType.Speaker:
            return "speakers/";
        case YamlType.TimetableDay1:
            return "timetables/day1/";
        case YamlType.TimetableDay2:
            return "timetables/day2/";
        case YamlType.TimetableDay3:
            return "timetables/day3/";
        default:
            throw Error("illegal args");
    }
}
exports.directoryName = directoryName;
function srcFilesDirPath(type) {
    return directoryName(type) + "src/";
}
exports.srcFilesDirPath = srcFilesDirPath;
function distResultPath(type) {
    return directoryName(type) + "dist/res.json";
}
exports.distResultPath = distResultPath;
/**
 * @param name gs://bucket/name の name部分 hookのObjectからとれるやつをそのまま入れる感じ
 */
function selectYamlType(name) {
    if (!name.endsWith(".yaml")) {
        return YamlType.Unknown;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.Proposal))) {
        return YamlType.Proposal;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.Speaker))) {
        return YamlType.Speaker;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay1))) {
        return YamlType.TimetableDay1;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay2))) {
        return YamlType.TimetableDay2;
    }
    if (name.startsWith(srcFilesDirPath(YamlType.TimetableDay3))) {
        return YamlType.TimetableDay3;
    }
    return YamlType.Unknown;
}
exports.selectYamlType = selectYamlType;
//# sourceMappingURL=yaml_types.js.map