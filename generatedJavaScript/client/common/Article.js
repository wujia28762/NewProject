define([],function(){
	egl.defineClass('client.common', "Article", "egl.jsrt", "Record", {
		"eze$$fileName" : "client/common/articleRec.egl",
			"constructor": function() {
			}
			,
			"ezeCopy": function(source) {
				this.article_id = source.article_id;
				this.title = source.title;
			}
			,
			"eze$$setEmpty": function() {
				this.article_id = 0;
				this.title = "";
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.common.Article();
				ezert$$2.article_id = ezert$$1.article_id;
				ezert$$2.title = ezert$$1.title;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "article_id", sig: "I;"},
					{name: "title", sig: "s255;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Article", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("article_id", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("article_id");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("article_id", "article_id", "I;", Number, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("title", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("title");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("title", "title", "s255;", String, annotations);
				}
				return this.fieldInfos;
			}
			,
			"toString": function() {
				return "[Article]";
			}
		}
	);
});
