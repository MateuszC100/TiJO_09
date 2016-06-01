describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should should if area < 0', function () {
            expect(app.calculateArea(3,5,4,'Success','Error')).toEqual({
                area: -7, message: 'Error'
            });
        });
        it('should message success if area > 0',function(){
            expect(app.calculateArea(3,2,1,'Success','Error')).toEqual({
                area: 1, message: 'Success'
            });
        });
        it('should message Big null if area: 0',function(){
            expect(app.calculateArea(4,2,2,'Success','Area')).toEqual({
                area: 0, message: 'Big null'
            });
        });

    });
});
