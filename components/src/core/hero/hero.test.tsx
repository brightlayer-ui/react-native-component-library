import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Hero, ChannelValue } from '..';
import { Text } from 'react-native';
import { IconFamily } from '../__types__';
import { cleanup } from '@testing-library/react-native';

const Line: IconFamily = { family: 'material-community', name: 'chart-line-variant' };

describe('Hero', () => {
    describe('with only a label and icon', () => {
        afterEach(cleanup);
        let instance: ReactTestInstance;
        beforeEach(() => {
            instance = TestRenderer.create(<Hero label={'Hero'} icon={Line} />).root;
        });

        it('renders without a ChannelValue', () => {
            expect(instance.findAllByType(ChannelValue)).toHaveLength(0);
        });

        it('renders the label', () => {
            const textElements = instance.findAllByType(Text);

            expect(textElements).toHaveLength(2); // first element is the icon
            expect(textElements[1].props.children).toEqual('Hero');
        });
    });

    describe('with all props', () => {
        afterEach(cleanup);
        let instance: ReactTestInstance;
        beforeEach(() => {
            instance = TestRenderer.create(
                <Hero label={'Hero'} icon={Line} ChannelValueProps={{ value: '100', units: '%' }} onPress={jest.fn()} />
            ).root;
        });

        it('renders a ChannelValue', () => {
            const channelValue = instance.findByType(ChannelValue);

            expect(channelValue).toBeTruthy();
            expect(channelValue.props.value).toEqual('100');
            expect(channelValue.props.units).toEqual('%');
        });
    });
});
