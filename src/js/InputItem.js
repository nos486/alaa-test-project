export class InputItem {
  get optionLabel() {
    return this._optionLabel;
  }

  set optionLabel(value) {
    this._optionLabel = value;
  }

  get optionValue() {
    return this._optionValue;
  }

  set optionValue(value) {
    this._optionValue = value;
  }

  get selectorName() {
    return this._selectorName;
  }

  set selectorName(value) {
    this._selectorName = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get icon() {
    return this._icon;
  }

  set icon(value) {
    this._icon = value;
  }

  get isEditable() {
    return this._isEditable;
  }

  set isEditable(value) {
    this._isEditable = value;
  }

  constructor({
                title,
                value,
                type,
                icon,
                isEditable = true,
                optionLabel = "name",
                optionValue = "id",
                selectorName = ""
              }) {
    this._title = title
    this._value = value
    this._type = type
    this._icon = icon
    this._isEditable = isEditable
    this._optionLabel = optionLabel
    this._selectorName = selectorName
    this._optionValue = optionValue;
  }
}
