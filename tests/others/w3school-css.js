module.exports = {
    '@tags': ['W3school'],
    'Case 1 input': function (browser) {
        switch (browser.options.desiredCapabilities.browserName) {
            case "chrome":
                var font_family_value = 'Georgia, serif';
                var font_weight_value = '300';
                var font_size_value = '41px';
                var height_value = '57px';
                var line_hight_value = '56.7465934753418px';
                var text_decoration_value = 'none solid rgb(34, 34, 34)';
                var margin_top_value = '3.200000047683716px';
                var width_value = '679.09375px';
                var list_style_type = 'disc';
                break;
            case "firefox":
                var font_family_value = 'Georgia,serif';
                var font_size_value = '40.5333px';
                var font_weight_value = '300';
                var height_value = '56.75px';
                var line_hight_value = '56.75px';
                var margin_top_value = '3.2px';
                var text_decoration_value = 'none';
                var width_value = '679.1px';
                break;
            case "safari":
                var font_family_value = 'Georgia, serif';
                var font_size_value = '41px';
                var font_weight_value = '300';
                var height_value = '57px';
                var line_hight_value = '56px';
                var margin_top_value = '3.200000047683716px';
                var text_decoration_value = 'none';
                var width_value = '678px';
                break;
        };
        browser
            .url('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_unordered')
            .waitForElementVisible('body', 5000)
            // assert the title
            .assert.title('Tryit Editor v3.5')
            // select the frame 
            .frame(null).frame(0)
            .click('body > ul > li:nth-child(3)')
            // assert the text exists
            .assert.containsText('body > ul > li:nth-child(3)', 'Milk')
            // test css properties
            .verify.cssProperty('body > ul > li:nth-child(3)', 'display', 'list-item')
            .verify.cssProperty('body > ul > li:nth-child(3)', 'text-align', 'left')
            .verify.cssProperty('body > ul > li:nth-child(3)', 'list-style-type', list_style_type)
            .pause(2000)
            .end();
    }
};