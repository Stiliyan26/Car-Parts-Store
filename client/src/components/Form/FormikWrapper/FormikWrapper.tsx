import styles from './FormikWrapper.style';

import FormButton from '../FormButton/FormButton';
import FormInputField from '../../common/Input/FormInputField/FormInputField';
import ErrorField from '../../common/Error/ErrorField';
import BaseText from '../../common/BaseText/BaseText';

import { getBorderColor, getIconColor, showError } from '../../../utils/UIHelper';
import { FormSourcePages, formSourcePagesMapper } from '../../../types/enums';

import { Formik, FormikHelpers } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FormCommonProps } from '../../../types/interface/IProps';


const FormikWrapper = <T extends Record<string, any>>({
  sourcePage,
  initialValues,
  formFields,
  validationSchema,
  buttonLabel,
  apiError,
  onSubmit
}: FormCommonProps<T>) => {
  const [focusedField, setFocusedField] = useState<string>('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: T, formikBag: FormikHelpers<T>) => {
        const succeeded = await onSubmit(values);

        if (succeeded) {
          formikBag.resetForm();
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <View style={styles.inputContainer}>
          {apiError ? (
            <ErrorField
              errorMessage={apiError}
              dynamicStyles={{textAlign: 'center'}}
            />
          )
            : null
          }
          {formFields.map((fields, index) => {
            const borderStyle = getBorderColor(focusedField, errors, touched, fields.fieldName);

            const stylesToAdd = { paddingLeft: 40 };

            const iconStyle = getIconColor(errors, touched, fields.fieldName);

            const fieldName =
              fields.fieldName as keyof T;

            return (
              <View key={`${fields.fieldName} ${index}`} style={{ marginTop: 10 }}>
                <BaseText style={styles.label}>
                  {fields.label}
                </BaseText>

                <FormInputField
                  placeholder={fields.placeholder}
                  dynamicStyle={{ ...borderStyle, ...stylesToAdd }}
                  secureTextEntry={fields.secureTextEntry}
                  keyboardType={fields.keyboardType}
                  icon={fields.icon}
                  iconStyle={iconStyle}
                  onChangeText={handleChange(fields.fieldName)}
                  onBlur={(e) => {
                    setFocusedField('');

                    return handleBlur(fields.fieldName)(e);
                  }}
                  onFocus={() => setFocusedField(fields.fieldName)}
                  value={values[fieldName]}
                />

                {showError(touched, errors, fields.fieldName)
                  && (
                    <ErrorField
                      errorMessage={errors[fieldName] as string}
                    />
                  )
                }
              </View>
            )
          })}

          {sourcePage === formSourcePagesMapper[FormSourcePages.LOGIN]
            ? getForgotPasswordFiled
            : null
          }

          <FormButton
            btnLabel={buttonLabel}
            handlePress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  )
}

const getForgotPasswordFiled = (
  <View style={styles.container}>
    <TouchableOpacity>
      <BaseText style={styles.forgotPassword}>
        Forgot password?
      </BaseText>
    </TouchableOpacity>
  </View>
)

export default FormikWrapper;
