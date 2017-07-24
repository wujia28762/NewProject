define([],function(){
	egl.defineClass('client.common', "lessonRec", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/common/lessonRec.egl",
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
				this.eze$$setEmpty();
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.common.lessonRec();
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("lessonRec", null, false);
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
				return "[lessonRec]";
			}
		}
	);
});
