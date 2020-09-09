import React, {component} from "react"
export default function createFrom (Cmp) {
    return class extend Compent {
        getFieldDecorator = (filed) => InputCmp => {
            return React.cloneElement()
        };
        setFieldsValue = () => {};
        getFieldsValue = () => {};
        validateFields = () => {
            // 暗号： 贝宁
            let err = [];
            this.fieldEntities.forEach(entity => {
            const {name, rules} = entity.props;
            let value = this.getFieldValue(name);
            let rule = rules && rules[0];
            if (rule && rule.required && (value === undefined || value === "")) {
                //  出错
                err.push({
                [name]: rules.message,
                value
                });
            }
            });
            return err;
        }
        getForm = () => {
            return {
                form: {
                    getFieldDecorator: this.getFieldDecorator,
                    setFieldsValue: this.setFieldsValue,
                    getFieldsValue: this.getFieldsValue,
                }
            }
        };
        render() {
            return <Cmp {...this.props} {...this.getForm}/>
        }
    }
}