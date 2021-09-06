export default function add(x: number): any {
    function _add(n: number) {
        if (n != undefined) {
            x+=n;
            return _add;
        }
        return x;
    }
    _add.valueOf = function() {
        return x;
    }
    _add.toString = function() {
        return x;
    }
    return _add;
}
