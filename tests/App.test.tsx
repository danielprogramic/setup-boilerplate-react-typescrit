import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import App from '../src/components/App';

describe('Test react', function() {
    let component;

    beforeEach(()=>{
        component = TestUtils.renderIntoDocument( <App/>);
    });


    it('Test if the content been correclty render', function() {
        console.log(component);

    });
});
