import styles from './CustomForm.style';

import BaseText from '../../common/BaseText/BaseText';
import FormikWrapper from '../FormikWrapper/FormikWrapper';
import KeyboardAvoidingWrapper from '../../../components/common/KeyBoard/KeyboardAvoidingWrapper';

import { useNavigationSetup } from '../../../hooks/useNavigationSetup';
import { FormCommonProps } from '../../../types/interface/props-interface';

import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Router, router } from 'expo-router';
import { ReactElement } from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

interface CustomFormProps<T> extends FormCommonProps<T> {
  animationComponent: ReactElement;
  navOptions: (styles: {}, router: Router) => StackNavigationOptions;
}

const CustomForm = <T extends Record<string, any>>({
  sourcePage = '',
  initialValues,
  animationComponent,
  formFields,
  validationSchema,
  buttonLabel = 'Create',
  apiError,
  onSubmit,
  navOptions,
}: CustomFormProps<T>) => {
  //Setting page navigation
  useNavigationSetup(navOptions(styles.navContainer, router));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingWrapper>
          <View style={styles.formContainer}>
            {/* Title */}
            <View style={styles.titleWrapper}>
              <BaseText style={styles.title}>{sourcePage}</BaseText>

              {animationComponent}
            </View>

            {/* Form */}
            <FormikWrapper
              sourcePage={sourcePage}
              initialValues={initialValues}
              formFields={formFields}
              validationSchema={validationSchema}
              buttonLabel={buttonLabel}
              apiError={apiError}
              onSubmit={onSubmit}
            />
          </View>
        </KeyboardAvoidingWrapper>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default CustomForm;
