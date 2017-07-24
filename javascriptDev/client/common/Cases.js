define([],function(){
	egl.defineClass('client.common', "Cases", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/common/casesRec.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.case_id = source.case_id;
				this.casename = source.casename;
			}
			,
			"eze$$setEmpty": function() {
				this.case_id = 0;
				this.casename = "";
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.common.Cases();
				ezert$$2.case_id = ezert$$1.case_id;
				ezert$$2.casename = ezert$$1.casename;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "case_id", sig: "I;"},
					{name: "casename", sig: "s100;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Cases", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("case_id", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("case_id");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("case_id", "case_id", "I;", Number, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("casename", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("casename");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("casename", "casename", "s100;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[Cases]";
			}
			,
			"eze$$getName": function() {
				return "client.common.Cases";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "case_id", value : eze$$parent.case_id, type : "eglx.lang.EInt", jsName : "case_id"},
				{name: "casename", value : eze$$parent.casename, type : "eglx.lang.EString(100)", jsName : "casename"}
				];
			}
		}
	);
});
