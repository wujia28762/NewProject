define([],function(){
	egl.defineClass('client.common', "articleRec", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/common/articleRec.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.itemName = source.itemName;
			}
			,
			"eze$$setEmpty": function() {
				this.itemName = "";
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
				var ezert$$2 = new egl.client.common.articleRec();
				ezert$$2.itemName = ezert$$1.itemName === null ? null : ezert$$1.itemName;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "itemName", sig: "S;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("articleRec", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("itemName", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("itemName");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("itemName", "itemName", "S;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[articleRec]";
			}
			,
			"eze$$getName": function() {
				return "client.common.articleRec";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "itemName", value : eze$$parent.itemName, type : "eglx.lang.EString", jsName : "itemName"}
				];
			}
		}
	);
});
