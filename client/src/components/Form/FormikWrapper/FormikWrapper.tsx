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
import { FormCommonProps } from '../../../types/interface/props-interface';
import ImageInput from '../../common/Input/ImageInput/ImageInput';


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
      {({ values, errors, touched, setFieldValue, handleChange, handleBlur, handleSubmit }) => (
        <View style={styles.inputContainer}>
          {apiError ? (
            <ErrorField
              errorMessage={apiError}
              dynamicStyles={{ textAlign: 'center' }}
            />
          )
            : null
          }
          {formFields.map((field, index) => {
            const borderStyle = getBorderColor(focusedField, errors, touched, field.fieldName);

            const stylesToAdd = { paddingLeft: 40 };

            const iconStyle = getIconColor(errors, touched, field.fieldName);

            const fieldName = field.fieldName as keyof T;

            const inputInfo = {
              value: values[fieldName],
              placeholder: field.placeholder,
              secureTextEntry: field.secureTextEntry,
              keyboardType: field.keyboardType,
              icon: field.icon,
            }

            const styleInfo = {
              dynamicStyle: { ...borderStyle, ...stylesToAdd },
              iconStyle: iconStyle
            }

            return (
              <View key={`${field.fieldName} ${index}`} style={{ marginTop: 10 }}>
                {field.fieldName === 'imageUri'
                  ? <ImageInput
                    onSelectImage={(image) => {
                      setFieldValue(field.fieldName, image);
                    }}
                  />
                  : (
                    <>
                      <BaseText style={styles.label}>
                        {field.label}
                      </BaseText>

                      <FormInputField
                        inputInfo={inputInfo}
                        styleInfo={styleInfo}
                        onChangeText={handleChange(field.fieldName)}
                        onBlur={(e) => {
                          setFocusedField('');

                          return handleBlur(field.fieldName)(e);
                        }}
                        onFocus={() => setFocusedField(field.fieldName)}
                      />
                    </>
                  )
                }

                {showError(touched, errors, field.fieldName)
                  && (
                    <ErrorField
                      dynamicStyles={field.fieldName === 'imageUri' ? { alignSelf: 'center' } : null}
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
