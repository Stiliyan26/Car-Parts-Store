import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../constants';

import { FormikErrors, FormikTouched } from 'formik';

export const getBorderColor = <T>(
    focusedField: string,
    error: FormikErrors<T>,
    touched: FormikTouched<T>,
    fieldName: string
) => {
    const hasError = showError(touched, error, fieldName);
    const isSelected = focusedField == fieldName;

    return {
        borderColor: hasError
            ? COLORS.errorBorderColor
            : (isSelected
                ? COLORS.selectedBorderColor
                : COLORS.defaultBorderColor)
    }
}

export const getIconColor = <T>(
    error: FormikErrors<T>,
    touched: FormikTouched<T>,
    fieldName: string
) => {
    const hasError = showError(touched, error, fieldName)

    return {
        tintColor:
            hasError
                ? COLORS.errorColor
                : COLORS.gray3
    }
}


export const showError = <T>(
    touched: FormikTouched<T>,
    error: FormikErrors<T>,
    fieldName: string
) => {
    const fieldNameKey = fieldName as keyof T

    return touched[fieldNameKey] && error[fieldNameKey];
}


export const getTabColor = (
    currentTab: string,
    activeTab: string,
): StyleProp<ViewStyle> => {
    return {
        backgroundColor:
            activeTab === currentTab
                ? COLORS.purple
                : COLORS.gray4,
    }
};

export const getTabTextColor = (
    currentTab: string,
    activeTab: string,
): StyleProp<TextStyle> => {
    return {
        color:
            activeTab === currentTab
                ? COLORS.white
                : COLORS.darkestGray,
    }
};

export const getRowColor = (index: number): StyleProp<ViewStyle> => {
    return {
        backgroundColor: index % 2 == 0 ? '#fefefe' : '#f1f2f2'
    }
}

export const getFlexBasis = (
    count: number
): StyleProp<TextStyle> => {
    const columns = 100 / count;

    return {
        flexBasis: `${columns}%`
    };
}

