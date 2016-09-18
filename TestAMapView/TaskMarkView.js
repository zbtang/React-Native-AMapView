/**
 * Created by tangzhibin on 16/9/12.
 */

'use strict';
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class TaskMarkView extends Component {
    static propTypes = {
        ...View.propTypes
    };
    static defaultProps = {};

    render() {
        return (
            <View >
                <Text style={styles.titleTxt}>消费金融｜持案5天</Text>
                <View style={styles.divider}/>
                <Text style={[styles.labelTxt, {marginTop: 10, marginBottom: 6}]}>不良资产总额</Text>
                <View style={styles.centerContainer}>
                    <Text style={{fontSize: 20, color: '#333333'}}>
                        15,600.00
                        <Text style={styles.labelTxt}>元</Text>
                    </Text>
                    <Text style={{fontSize: 20, color: '#333333'}}>
                        18%
                        <Text style={styles.labelTxt}>佣金</Text>
                    </Text>
                    <TouchableOpacity style={styles.fetchBtn}>
                        <Text style={{fontSize: 14, color: 'white'}}>查看</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.addressTxt, {marginTop: 6}]}>深圳市南山区好来居</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    labelTxt: {
        fontSize: 12,
        color: '#999999'
    },
    addressTxt: {
        fontSize: 11,
        color: '#999999'
    },
    centerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleTxt: {
        fontSize: 14,
        color: '#999999',
        paddingBottom: 12
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#999999'
    },
    fetchBtn: {
        width: 50,
        height: 30,
        borderRadius: 3,
        backgroundColor: '#FF7200',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
