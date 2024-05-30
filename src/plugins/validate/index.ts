import * as veeValidate from 'vee-validate'
import * as rulesImport from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';
import yup from './yup';
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json';
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');

veeValidate.configure({
  generateMessage: localize('zh_CN')
})

const rules: Record<string, any> = rulesImport;

Object.keys(rules).forEach((rule: string) => {
  veeValidate.defineRule(rule, rules[rule])
})

const modules = {
  yup,
  ...veeValidate
}

export default modules
