import { IFile } from './types/Files';

export const filesMocks: IFile[] = [
  {
    id: 1,
    filename: 'Hello world',
    code: 'Some code',
    graph: {
      nodes: [
        {
          id: 'MONTH_KEY',
          color: 'blue',
        },
        {
          id: 'LAST_SERIAL_NUM_MONTHLY',
          color: 'blue',
        },
        {
          id: 'NUM_OF_CALLS',
          color: 'red',
        },
        {
          id: 'FIRST_SERIAL_NUM_MONTHLY',
          color: 'blue',
        },
        {
          id: 'NUM_OF_CALLS_MONTHLY',
          color: 'blue',
        },
        {
          id: 'MAJOR_SERIAL_NUM_1M',
          color: 'blue',
        },
        {
          id: 'CALL_DURATION_MIN',
          color: 'red',
        },
        {
          id: 'SERIAL_NUM_ON_SUBS_MONTHLY',
          color: 'blue',
        },
        {
          id: 'CALL_DURATION_MIN_MONTHLY',
          color: 'blue',
        },
        {
          id: 'COUNT_SERIAL_NUM',
        },
        {
          id: 'ID',
          color: 'green',
        },
        {
          id: 'TRAFFIC_LTE_MONTHLY',
          color: 'blue',
        },
        {
          id: 'SERIAL_NUM',
          color: 'red',
        },
        {
          id: 'TRAFFIC_LTE',
          color: 'red',
        },
      ],
      links: [
        {
          source: 'CALL_DURATION_MIN',
          target: 'CALL_DURATION_MIN_MONTHLY',
        },
        {
          source: 'NUM_OF_CALLS',
          target: 'NUM_OF_CALLS_MONTHLY',
        },
        {
          source: 'TRAFFIC_LTE',
          target: 'TRAFFIC_LTE_MONTHLY',
        },
        {
          source: 'SERIAL_NUM',
          target: 'SERIAL_NUM_ON_SUBS_MONTHLY',
        },
        {
          source: 'SERIAL_NUM',
          target: 'FIRST_SERIAL_NUM_MONTHLY',
        },
        {
          source: 'SERIAL_NUM',
          target: 'LAST_SERIAL_NUM_MONTHLY',
        },
        {
          source: 'SERIAL_NUM',
          target: 'COUNT_SERIAL_NUM',
        },
        {
          source: 'SERIAL_NUM',
          target: 'MAJOR_SERIAL_NUM_1M',
        },
      ],
    },
  },
  {
    id: 2,
    filename: 'Salsa with spaghetty',
    code: 'Some code',
    graph: {
      nodes: [
        {
          id: 'AVG_MAX_BALANCE',
        },
        {
          id: 'WEIGHT',
        },
        {
          id: 'VOICE_IN_DURATION',
        },
        {
          id: 'CNT_SMS_IN',
        },
        {
          id: 'AVG_BLOCK_DAYS_COUNT',
        },
        {
          id: 'BLUETOOTH_IND',
        },
        {
          id: 'TOUCHSCREEN_IND',
        },
        {
          id: 'PERC_ACTIVE_USERS',
        },
        {
          id: 'COUNT_DEVICE_CHANGES',
        },
        {
          id: 'PRIORITY_TAC',
        },
        {
          id: 'CAMERA_IND',
        },
        {
          id: 'COUNT_PERIODS_POSIT_REV_12M',
        },
        {
          id: 'SMS_SHORT_NUM',
        },
        {
          id: 'AVG_BALANCE',
        },
        {
          id: 'RAM_CAPACITY',
        },
        {
          id: 'AVG_AVITO_PRICE_3M',
        },
        {
          id: 'AVG_ROAM_MIN',
        },
        {
          id: 'PRICE_RUB_TO_KZT',
        },
        {
          id: 'DW_STATUS_KEY',
        },
        {
          id: 'SUM_COUNT_DEVICE_CHANGES',
        },
        {
          id: 'GPS_IND',
        },
        {
          id: 'CAMERA_RESOLUTION',
        },
        {
          id: 'ROWNUMBER_CONTROL',
        },
        {
          id: 'AVG_CNT_SMS_IN',
        },
        {
          id: 'NOT_NULL_PRICE_AMT_AVITO',
        },
        {
          id: 'BLOCK_DAYS_COUNT',
        },
        {
          id: 'AVG_AVITO_PRICE_2M',
        },
        {
          id: 'VOICE_OUT_DURATION',
        },
        {
          id: 'IS_HUAWEI',
        },
        {
          id: 'TOTAL_ROAM_MIN',
        },
        {
          id: 'AVG_CNT_CALL_OUT',
        },
        {
          id: 'IS_APPLE',
        },
        {
          id: 'IS_SAMSUNG',
        },
        {
          id: 'PRICE',
        },
        {
          id: 'IS_XIAOMI',
        },
        {
          id: 'AVG_COUNT_PERIODS_POSIT_REV_12M',
        },
        {
          id: 'CNT_ACTIVE_USERS',
        },
        {
          id: 'AVG_PRICE_3M',
        },
        {
          id: 'CNT_SMS_OUT',
        },
        {
          id: 'MONTH_KEY',
        },
        {
          id: 'AVG_PRICE',
        },
        {
          id: 'LT_DEVICE',
        },
        {
          id: 'CNT_CALL_IN',
        },
        {
          id: 'IS_GOOGLE',
        },
        {
          id: 'AVG_CNT_SMS_OUT',
        },
        {
          id: 'STD_BALANCE',
        },
        {
          id: 'AVG_TOTAL_DATA_VOLUME',
        },
        {
          id: 'GLONASS_IND',
        },
        {
          id: 'AVG_VOICE_OUT_DURATION',
        },
        {
          id: 'RATIO_ACTIVE_ALL',
        },
        {
          id: 'AVG_UNIC_CTN_CPA',
        },
        {
          id: 'EDGE_IND',
        },
        {
          id: 'IS_MEIZU',
        },
        {
          id: 'CNT_USERS_OVERALL',
        },
        {
          id: 'CNT_CALL_OUT',
        },
        {
          id: 'ACTIVE_IND',
        },
        {
          id: 'OS',
        },
        {
          id: 'FUNCTIONALITY_CLASS',
        },
        {
          id: 'FIRST_DISP_TYPE',
        },
        {
          id: 'LTE_IND',
        },
        {
          id: 'TAC',
        },
        {
          id: 'ROM_CAPACITY',
        },
        {
          id: 'AVG_MIN_BALANCE',
        },
        {
          id: 'PRICE_VENDOR_OLD',
        },
        {
          id: 'TWO_SIM_IND',
        },
        {
          id: 'MEMORY_CARD_IND',
        },
        {
          id: 'AVG_COUNT_DEVICE_CHANGES',
        },
        {
          id: 'AVG_VOICE_IN_DURATION',
        },
        {
          id: 'FIRST_DISP_DIAG',
        },
        {
          id: 'MIN_BALANCE',
        },
        {
          id: 'AVG_CNT_CALL_IN',
        },
        {
          id: 'UNIC_CTN_CPA',
        },
        {
          id: 'WLAN_IND',
        },
        {
          id: 'IS_EXPENSIVE',
        },
        {
          id: 'DEVICE_TYPE',
        },
        {
          id: 'A_GPS_IND',
        },
        {
          id: 'TOTAL_DATA_VOLUME',
        },
        {
          id: 'GPRS_IND',
        },
        {
          id: 'AVG_AVITO_PRICE_1M',
        },
        {
          id: 'BRAND',
        },
        {
          id: 'MULTISIM_IND',
        },
        {
          id: 'IS_NOKIA',
        },
        {
          id: 'AVG_ARPU_3M',
        },
        {
          id: 'AVG_SMS_SHORT_NUM',
        },
        {
          id: 'MAX_BALANCE',
        },
        {
          id: 'IND_3G',
        },
        {
          id: 'AVG_STD_BALANCE',
        },
        {
          id: 'LAUNCH',
        },
        {
          id: 'AVG_PRICE_3M_AVITO',
        },
        {
          id: 'TARGET_PRICE',
        },
        {
          id: 'PERC_USERS_OVERALL',
        },
      ],
      links: [
        {
          source: 'DW_STATUS_KEY',
          target: 'CNT_ACTIVE_USERS',
        },
        {
          source: 'ACTIVE_IND',
          target: 'CNT_ACTIVE_USERS',
        },
        {
          source: 'COUNT_DEVICE_CHANGES',
          target: 'SUM_COUNT_DEVICE_CHANGES',
        },
        {
          source: 'COUNT_DEVICE_CHANGES',
          target: 'AVG_COUNT_DEVICE_CHANGES',
        },
        {
          source: 'COUNT_PERIODS_POSIT_REV_12M',
          target: 'AVG_COUNT_PERIODS_POSIT_REV_12M',
        },
        {
          source: 'TOTAL_ROAM_MIN',
          target: 'AVG_ROAM_MIN',
        },
        {
          source: 'CNT_CALL_OUT',
          target: 'AVG_CNT_CALL_OUT',
        },
        {
          source: 'CNT_CALL_IN',
          target: 'AVG_CNT_CALL_IN',
        },
        {
          source: 'VOICE_OUT_DURATION',
          target: 'AVG_VOICE_OUT_DURATION',
        },
        {
          source: 'VOICE_IN_DURATION',
          target: 'AVG_VOICE_IN_DURATION',
        },
        {
          source: 'UNIC_CTN_CPA',
          target: 'AVG_UNIC_CTN_CPA',
        },
        {
          source: 'CNT_SMS_OUT',
          target: 'AVG_CNT_SMS_OUT',
        },
        {
          source: 'CNT_SMS_IN',
          target: 'AVG_CNT_SMS_IN',
        },
        {
          source: 'SMS_SHORT_NUM',
          target: 'AVG_SMS_SHORT_NUM',
        },
        {
          source: 'TOTAL_DATA_VOLUME',
          target: 'AVG_TOTAL_DATA_VOLUME',
        },
        {
          source: 'MIN_BALANCE',
          target: 'AVG_MIN_BALANCE',
        },
        {
          source: 'MAX_BALANCE',
          target: 'AVG_MAX_BALANCE',
        },
        {
          source: 'STD_BALANCE',
          target: 'AVG_STD_BALANCE',
        },
        {
          source: 'BLOCK_DAYS_COUNT',
          target: 'AVG_BLOCK_DAYS_COUNT',
        },
        {
          source: 'PRIORITY_TAC',
          target: 'TAC',
        },
        {
          source: 'CNT_USERS_OVERALL',
          target: 'PERC_USERS_OVERALL',
        },
        {
          source: 'CNT_ACTIVE_USERS',
          target: 'PERC_ACTIVE_USERS',
        },
        {
          source: 'CNT_USERS_OVERALL',
          target: 'RATIO_ACTIVE_ALL',
        },
        {
          source: 'CNT_ACTIVE_USERS',
          target: 'RATIO_ACTIVE_ALL',
        },
        {
          source: 'PRICE_RUB_TO_KZT',
          target: 'AVG_AVITO_PRICE_1M',
        },
        {
          source: 'PRICE',
          target: 'AVG_AVITO_PRICE_1M',
        },
        {
          source: 'PRICE_RUB_TO_KZT',
          target: 'AVG_AVITO_PRICE_2M',
        },
        {
          source: 'PRICE',
          target: 'AVG_AVITO_PRICE_2M',
        },
        {
          source: 'PRICE_RUB_TO_KZT',
          target: 'AVG_AVITO_PRICE_3M',
        },
        {
          source: 'PRICE',
          target: 'AVG_AVITO_PRICE_3M',
        },
        {
          source: 'AVG_AVITO_PRICE_1M',
          target: 'NOT_NULL_PRICE_AMT_AVITO',
        },
        {
          source: 'AVG_AVITO_PRICE_2M',
          target: 'NOT_NULL_PRICE_AMT_AVITO',
        },
        {
          source: 'AVG_AVITO_PRICE_3M',
          target: 'NOT_NULL_PRICE_AMT_AVITO',
        },
        {
          source: 'NOT_NULL_PRICE_AMT_AVITO',
          target: 'AVG_PRICE_3M_AVITO',
        },
        {
          source: 'AVG_AVITO_PRICE_1M',
          target: 'AVG_PRICE_3M_AVITO',
        },
        {
          source: 'PRICE',
          target: 'PRICE_VENDOR_OLD',
        },
        {
          source: 'AVG_AVITO_PRICE_1M',
          target: 'AVG_PRICE',
        },
        {
          source: 'PRICE_VENDOR_OLD',
          target: 'AVG_PRICE',
        },
        {
          source: 'AVG_PRICE_3M_AVITO',
          target: 'AVG_PRICE_3M',
        },
        {
          source: 'PRICE_VENDOR_OLD',
          target: 'AVG_PRICE_3M',
        },
        {
          source: 'AVG_AVITO_PRICE_1M',
          target: 'TARGET_PRICE',
        },
        {
          source: 'PRICE_VENDOR_OLD',
          target: 'TARGET_PRICE',
        },
      ],
    },
  },
  {
    id: 3,
    filename: 'Beef Burger',
    code: 'Some code',
    graph: {
      nodes: [
        { id: 'Jerry' },
        { id: 'Dunkan' },
        { id: 'Garry' },
        { id: 'Meru' },
        { id: 'Arthur' },
      ],
      links: [
        {
          source: 'Jerry',
          target: 'Dunkan',
        },
        { source: 'Jerry', target: 'Garry' },
        { source: 'Garry', target: 'Meru' },
        { source: 'Garry', target: 'Arthur' },
        { source: 'Arthur', target: 'Meru' },
      ],
    },
  },
  {
    id: 4,
    filename: 'I am sexy and I know it',
    code: 'Some code',
    graph: {
      nodes: [
        { id: 'Milana' },
        { id: 'Tamila' },
        { id: 'Andrey' },
        { id: 'Malika' },
        { id: 'Arthur' },
      ],
      links: [
        {
          source: 'Milana',
          target: 'Tamila',
        },
        { source: 'Milana', target: 'Andrey' },
        { source: 'Andrey', target: 'Malika' },
        { source: 'Andrey', target: 'Andrey' },
        { source: 'Arthur', target: 'Malika' },
      ],
    },
  },
];
