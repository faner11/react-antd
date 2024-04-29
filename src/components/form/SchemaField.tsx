import {
  Cascader,
  Checkbox,
  DatePicker,
  FormGrid,
  FormItem,
  Input,
  NumberPicker,
  PreviewText,
  Radio,
  Select,
  Space,
} from '@formily/antd-v5'
import { createSchemaField } from '@formily/react'
import { Typography } from 'antd'

export const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
    Radio,
    Checkbox,
    DatePicker,
    Cascader,
    PreviewText,
    Space,
    NumberPicker,
    Typography,
    FormGrid,
  },
})
