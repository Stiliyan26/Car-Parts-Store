import styles from './EmployeeTable.style';

import BaseText from '../../../../../components/common/BaseText/BaseText';
import RowWrapper from '../../../../../components/common/RowWrapper/RowWrapper';
import NoDataMsg from '../../../../../components/common/NoDataMsg/NoDataMsg';
import AppLoader from '../../../../../components/common/Loader/AppLoader';

import { getRowColor, getFlexBasis } from '../../../../../utils/UIHelper';
import { CompanyIdParams } from '../../../../../types/type/ParamTypes';
import { useSearchContext } from '../../../../../contexts/useSearchContext';
import { filteredBySearchQuery } from '../../../../../utils/helperFunctions';
import { useCurrentCompanyContext } from '../../../../../contexts/useCurrentCompanyContext';

import { FlatList, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';

const columns = ['Name', 'Email', 'Role', 'Edit'];

const EmployeeTable = () => {
    const { searchQuery } = useSearchContext();
    const { getEmployees } = useCurrentCompanyContext();

    const employees = getEmployees();
    // const params = useLocalSearchParams<CompanyIdParams>();

    // const filteredEmployees = useMemo(() => {
    //     return filteredBySearchQuery(employees, searchQuery)
    // }, [employees, searchQuery]);

    const getEmployeeData = () => (
        employees && employees.length > 0
            ? (
                <FlatList
                    data={employees}
                    keyExtractor={(item, index) => `${item.email} ${index}`}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    renderItem={({ item, index }) => (
                        <View
                            style={[
                                styles.infoRow,
                                getRowColor(index)
                            ]}
                            onStartShouldSetResponder={() => true}
                        >
                            <RowWrapper
                                values={[
                                    item.name,
                                    item.email,
                                    item.role,
                                    'Edit'
                                ]}
                                columns={columns}
                                dynamicStyles={styles.infoText}
                            />
                        </View>
                    )}
                />
            )
            : <NoDataMsg />
    )

    return (
        <>
            <View style={styles.header}>
                {columns.map((column, index) => (
                    <BaseText
                        key={`${index} ${column}`}
                        style={[
                            styles.titleHeader,
                            getFlexBasis(columns.length)
                        ]}
                    >
                        {column}
                    </BaseText>
                ))}
            </View>

            {getEmployeeData()}
        </>
    )
}

export default EmployeeTable;
