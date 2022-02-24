import React from 'react'
import './i18n';
import { useTranslation } from 'react-i18next'; 
import { Text, View } from "react-native";

const Test=() => {
            const { t, i18n } = useTranslation();
            return (
                <View>
                    <Text>{t('titre')}</Text>
                <Text>{t('description.part1')}</Text>
                </View>
        )
     } 

export default Test