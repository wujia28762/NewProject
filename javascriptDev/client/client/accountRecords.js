define([],function(){
	egl.defineClass('client.client', "accountRecords", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/client/Login.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.username = source.username;
				this.password = source.password;
				this.email = source.email;
				this.realName = source.realName;
				this.birthday = source.birthday;
				this.address = source.address;
			}
			,
			"eze$$setEmpty": function() {
				this.username = "";
				this.password = "";
				this.email = "";
				this.realName = "";
				this.birthday = egl.eglx.lang.DateTimeLib.currentDate();
				this.address = "";
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
				var ezert$$2 = new egl.client.client.accountRecords();
				ezert$$2.username = ezert$$1.username === null ? null : ezert$$1.username;
				ezert$$2.password = ezert$$1.password === null ? null : ezert$$1.password;
				ezert$$2.email = ezert$$1.email === null ? null : ezert$$1.email;
				ezert$$2.realName = ezert$$1.realName === null ? null : ezert$$1.realName;
				ezert$$2.birthday = ezert$$1.birthday;
				ezert$$2.address = ezert$$1.address === null ? null : ezert$$1.address;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "username", sig: "S;"},
					{name: "password", sig: "S;"},
					{name: "email", sig: "S;"},
					{name: "realName", sig: "S;"},
					{name: "birthday", sig: "K;"},
					{name: "address", sig: "S;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("accountRecords", null, false);
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
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("email", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("email");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("email", "email", "S;", String, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("realName", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("realName");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("realName", "realName", "S;", String, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthday", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthday");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("birthday", "birthday", "K;", Date, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("address", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("address");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("address", "address", "S;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[accountRecords]";
			}
			,
			"eze$$getName": function() {
				return "client.client.accountRecords";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "username", value : eze$$parent.username, type : "eglx.lang.EString", jsName : "username"},
				{name: "password", value : eze$$parent.password, type : "eglx.lang.EString", jsName : "password"},
				{name: "email", value : eze$$parent.email, type : "eglx.lang.EString", jsName : "email"},
				{name: "realName", value : eze$$parent.realName, type : "eglx.lang.EString", jsName : "realName"},
				{name: "birthday", value : eze$$parent.birthday, type : "eglx.lang.EDate", jsName : "birthday"},
				{name: "address", value : eze$$parent.address, type : "eglx.lang.EString", jsName : "address"}
				];
			}
		}
	);
});
