define([],function(){
	egl.defineClass('client.common', "Lesson", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/common/lessonRec.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.lesson_id = source.lesson_id;
				this.lessonname = source.lessonname;
				this.coursecom = source.coursecom;
				this._url = source._url;
			}
			,
			"eze$$setEmpty": function() {
				this.lesson_id = 0;
				this.lessonname = "";
				this.coursecom = "";
				this._url = null;
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.common.Lesson();
				ezert$$2.lesson_id = ezert$$1.lesson_id;
				ezert$$2.lessonname = ezert$$1.lessonname;
				ezert$$2.coursecom = ezert$$1.coursecom;
				ezert$$2._url = ezert$$1._url === null ? null : ezert$$1._url;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "lesson_id", sig: "I;"},
					{name: "lessonname", sig: "s100;"},
					{name: "coursecom", sig: "s255;"},
					{name: "_url", sig: "s255;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Lesson", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("lesson_id", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("lesson_id");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("lesson_id", "lesson_id", "I;", Number, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("lessonname", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("lessonname");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("lessonname", "lessonname", "s100;", String, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("coursecom", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("coursecom");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("coursecom", "coursecom", "s255;", String, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("_url", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("_url");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("_url", "_url", "?s255;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[Lesson]";
			}
		}
	);
});
