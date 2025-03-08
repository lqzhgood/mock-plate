const rules = [
    {
        mode: 'blue_all',
        img: './assets/bg/13.png',
        font: '#fff',
    },
    {
        mode: 'blue_up',
        img: './assets/bg/14.png',
        font: '#fff',
    },
] as const;

export type MODE = (typeof rules)[number]['mode'];

export function getRules(mode: MODE) {
    return rules[0];
}

export const provinceList = [
    { province: '北京市', abbr: '京' },
    { province: '天津市', abbr: '津' },
    { province: '上海市', abbr: '沪' },
    { province: '重庆市', abbr: '渝' },
    { province: '广西壮族自治区', abbr: '桂' },
    { province: '内蒙古自治区', abbr: '蒙' },
    { province: '新疆维吾尔自治区', abbr: '新' },
    { province: '宁夏回族自治区', abbr: '宁' },
    { province: '西藏自治区', abbr: '藏' },
    { province: '河北省', abbr: '冀' },
    { province: '河南省', abbr: '豫' },
    { province: '云南省', abbr: '云' },
    { province: '辽宁省', abbr: '辽' },
    { province: '黑龙江省', abbr: '黑' },
    { province: '湖南省', abbr: '湘' },
    { province: '安徽省', abbr: '皖' },
    { province: '山东省', abbr: '鲁' },
    { province: '江苏省', abbr: '苏' },
    { province: '浙江省', abbr: '浙' },
    { province: '江西省', abbr: '赣' },
    { province: '湖北省', abbr: '鄂' },
    { province: '甘肃省', abbr: '甘' },
    { province: '山西省', abbr: '晋' },
    { province: '陕西省', abbr: '陕' },
    { province: '吉林省', abbr: '吉' },
    { province: '福建省', abbr: '闽' },
    { province: '贵州省', abbr: '贵' },
    { province: '广东省', abbr: '粤' },
    { province: '青海省', abbr: '青' },
    { province: '四川省', abbr: '川' },
    { province: '海南省', abbr: '琼' },
    { province: '香港特别行政区', abbr: '粤' },
    { province: '澳门特别行政区', abbr: '粤' },
];
