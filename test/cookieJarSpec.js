describe('CookieJar', function() {

    var name,value,days;

    beforeEach(function(){
        deleteAllCookies();
    });

    describe('set', function() {

        it('should set string', function() {

            setup(function(){
                name = 'name';
                value = 'value';
                days = 1;
            });

            when('a cookie is set', function(){
                doodlemoonch.cookieManager.set(name, value, days);
            });

            then('get returns the string', function(){
                expect(document.cookie).toContain(name + '=' + value);
            });

        });

        it('should set number', function() {

            setup(function(){
                name = 'name';
                value = 1;
                days = 1;
            });

            when('a cookie is set with a number', function(){
                doodlemoonch.cookieManager.set(name, value, days);
            });

            then('get returns the number', function(){
                expect(document.cookie).toContain(name + '=' + value);
            });
        });
    });

    describe('get', function() {

        it('should get string', function() {

            setup(function(){
                name = 'name';
                value = 'value';
                days = 1;
            });

            when('a cookie is set with a string', function(){
                document.cookie = name + '=' + value + ';';
            });

            then('get returns the string', function(){
                expect(doodlemoonch.cookieManager.get(name)).toEqual(value.toString());
            });
        });

        it('should get number', function() {

            setup(function(){
                name = 'name';
                value = 1;
                days = 1;
            });

            when('a cookie is set with a number', function(){
                document.cookie = name + '=' + value + ';';
            });

            then('get returns the number', function(){
                expect(doodlemoonch.cookieManager.get(name)).toEqual(value.toString());
            });
        });
    });

    describe('remove', function() {

        it('should remove cookie', function() {

            setup(function(){
                name = 'name';
                value = 'value';
                days = 1;
            });

            given('a cookie is set', function(){
                doodlemoonch.cookieManager.set(name, value, days);
            });

            when('remove is called', function(){
                doodlemoonch.cookieManager.remove(name);
            });

            then('the cookie no longer exists', function(){
                expect(document.cookie).not.toContain(name);
                expect(doodlemoonch.cookieManager.get(name)).toEqual(null);
            });

        });
    });

    function deleteAllCookies() {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

});