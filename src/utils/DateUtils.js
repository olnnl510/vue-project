export default { // 객체를 외부에서 쓸 수 있도록 (=접근지시어를 public 으로 해주는것)
    getTimestamp: function(date) { // date 파라미터는 Date객체
        date.setHours(date.getHours() + 9);
        return date.toISOString().replace('T', ' ').substring(0, 19);
    }
}