define([],function(){
	egl.defineRUILibrary('client.common', 'ValidationMessages',
	{
		'eze$$fileName': 'client/common/ValidationMessages.egl',
		'eze$$runtimePropertiesFile': 'client.common.ValidationMessages',
			"constructor": function() {
				if(egl.client.common.ValidationMessages['$inst']) return egl.client.common.ValidationMessages['$inst'];
				egl.client.common.ValidationMessages['$inst']=this;
			}
			,
			"eze$$setEmpty": function() {
				this.usrMinInput = "";
				this.pwMinInput = "";
				this.valReq = "";
				this.validZip = "";
				this.emailError = "";
				this.invalidDate = "";
			}
			,
			"eze$$setInitial": function() {
				if(egl.client.common.ValidationMessages['$inst']) return egl.client.common.ValidationMessages['$inst'];
				egl.client.common.ValidationMessages['$inst']=this;
				this.eze$$setEmpty();
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("ValidationMessages", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
				}
				return this.fieldInfos;
			}
			,
			"getUsrMinInput": function() {
				return usrMinInput;
			}
			,
			"setUsrMinInput": function(ezeValue) {
				this.usrMinInput = ezeValue;
			}
			,
			"getPwMinInput": function() {
				return pwMinInput;
			}
			,
			"setPwMinInput": function(ezeValue) {
				this.pwMinInput = ezeValue;
			}
			,
			"getValReq": function() {
				return valReq;
			}
			,
			"setValReq": function(ezeValue) {
				this.valReq = ezeValue;
			}
			,
			"getValidZip": function() {
				return validZip;
			}
			,
			"setValidZip": function(ezeValue) {
				this.validZip = ezeValue;
			}
			,
			"getEmailError": function() {
				return emailError;
			}
			,
			"setEmailError": function(ezeValue) {
				this.emailError = ezeValue;
			}
			,
			"getInvalidDate": function() {
				return invalidDate;
			}
			,
			"setInvalidDate": function(ezeValue) {
				this.invalidDate = ezeValue;
			}
			,
			"toString": function() {
				return "[ValidationMessages]";
			}
		}
	);
});
