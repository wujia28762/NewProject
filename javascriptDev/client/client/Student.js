define(["org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$View"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Student", {
		"eze$$fileName" : "client/client/Student.egl",
		"eze$$runtimePropertiesFile" : "client/client/Student",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,14,283,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,14,296,8, this);
					this.ui.setRows(4);
					egl.atLine(this.eze$$fileName,14,306,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,14,323,12, this);
					this.ui.setChildren((function() { var eze$Temp1 = []; eze$Temp1.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp1[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp1;})());
					egl.atLine(this.eze$$fileName,11,158,28, this);
					this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Student();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Student", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ui");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("ui", "ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,16,343,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Student]";
			}
			,
			"eze$$getName": function() {
				return "Student";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
