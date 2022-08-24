import {render,screen} from '@testing-library/react'

import Create from '../../pages/Create'

describe("test the create component",()=>{
    test('radio', ()=>{
        render(<Create></Create>)
        const radioList =  screen.findAllByRole('button')
        console.log(radioList)
        expect(radioList).toHaveLength(1);
    })
})

