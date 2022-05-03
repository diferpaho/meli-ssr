import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import Detail from './detail'
import List from './list'
import Navbar from './navbar'

describe('main', () => {
    function treeList() {
        return render(
            <List />
        )
    }

    function treeDetail() {
        return render(
            <List />
        )
    }

    function treeNavbar() {
        return render(
            <List />
        )
    }

    it('List: should be success', () => {
        screen.debug();
        expect(treeList()).toMatchSnapshot();
    });

    it('Detail: should be success', () => {
        screen.debug();
        expect(treeDetail()).toMatchSnapshot();
    });

    it('Navbar: should be success', () => {
        screen.debug();
        expect(treeNavbar()).toMatchSnapshot();
    });

});