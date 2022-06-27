import DataBinding from '../views/data-binding/DataBinding.vue'
import DataBindingHtml from '../views/data-binding/DataBindingHtml.vue'
import DataBindingInputText from '../views/data-binding/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/data-binding/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/data-binding/DataBindingTextarea.vue'
import DataBindingSelect from '../views/data-binding/DataBindingSelect.vue'
import DatabindingCheckbox from '../views/data-binding/DataBindingCheckbox.vue'
import DataBindingRadio from '../views/data-binding/DataBindingRadio.vue'
import DataBindingAttribute from '../views/data-binding/DataBindingAttribute.vue'
import DataBindingButton from '../views/data-binding/DataBindingButton.vue'
import DataBindingClass from '../views/data-binding/DataBindingClass'
import DataBindingInlineStyle from '../views/data-binding/DataBindingInlineStyle'
import DataBindingList from '../views/data-binding/DataBindingList'

export default [
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinginputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databindingtextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/databindingcheckbox',
    name: 'DataBindingCheckbox',
    component: DatabindingCheckbox
  },
  {
    path: '/databindingradio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/databindinginlinestyle',
    name:'DataBindingInlineStyle',
    component: DataBindingInlineStyle
  },
  {
    path: '/databindinglist',
    name: 'DataBindingList',
    component: DataBindingList
  }
]
