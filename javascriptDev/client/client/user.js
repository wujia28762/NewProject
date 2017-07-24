define([],function(){
	egl.defineClass('client.client', "user", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/client/Login.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.username = source.username;
				this.password = source.password;
			}
			,
			"eze$$setEmpty": function() {
				this.username = "";
				this.password = "";
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
				var ezert$$2 = new egl.client.client.user();
				ezert$$2.username = ezert$$1.username === null ? null : ezert$$1.username;
				ezert$$2.password = ezert$$1.password === null ? null : ezert$$1.password;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "username", sig: "S;"},
					{name: "password", sig: "S;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("user", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("username", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("username");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("username", "username", "S;", String, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("password", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("password");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("password", "password", "S;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[user]";
			}
			,
			"eze$$getName": function() {
				return "client.client.user";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "username", value : eze$$parent.username, type : "eglx.lang.EString", jsName : "username"},
				{name: "password", value : eze$$parent.password, type : "eglx.lang.EString", jsName : "password"}
				];
			}
		}
	);
});
