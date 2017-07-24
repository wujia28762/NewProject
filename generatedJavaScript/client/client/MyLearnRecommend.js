define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "MyLearnRecommend", {
		"eze$$fileName" : "client/client/MyLearnRecommend.egl",
		"eze$$runtimePropertiesFile" : "client/client/MyLearnRecommend",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.LearningRecommendBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.bodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.head = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLink1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLink2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLink3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Box2 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.myImage = new egl.org.eclipse.edt.rui.widgets.Image();
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(1);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LearningRecommendBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.LearningRecommendBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.LearningRecommendBox.setPadding(4);
				this.LearningRecommendBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.LearningRecommendBox.setColumns(2);
				this.bodyBox.setPadding(4);
				this.bodyBox.setColumns(1);
				this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.head,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink3,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.head.setText("\u53ef\u80fd\u7b26\u5408\u60a8\u9700\u6c42\u7684\u8bfe\u7a0b\u5217\u8868\uff1a");
				this.head.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.head.setFontSize("14");
				this.HyperLink1.setText("\u73a9\u5177");
				this.HyperLink1.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson1.html");
				this.HyperLink1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLink1.setFontSize("14");
				this.HyperLink1.setMarginTop(10);
				this.HyperLink2.setText("\u6587\u5177");
				this.HyperLink2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLink2.setFontSize("14");
				this.HyperLink2.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson2.html");
				this.HyperLink3.setText("\u9ad8\u77ee");
				this.HyperLink3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLink3.setFontSize("14");
				this.HyperLink3.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson3.html");
				this.Box2.setPadding(8);
				this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myImage,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
				this.Box2.setMarginLeft(70);
				this.myImage.setSrc("E:\\workspace\\pictures\\recimage_\u526f\u672c.jpg");
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.MyLearnRecommend();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.LearningRecommendBox = ezert$$1.LearningRecommendBox === null ? null : ezert$$1.LearningRecommendBox.eze$$clone();
				ezert$$2.bodyBox = ezert$$1.bodyBox === null ? null : ezert$$1.bodyBox.eze$$clone();
				ezert$$2.head = ezert$$1.head === null ? null : ezert$$1.head.eze$$clone();
				ezert$$2.HyperLink1 = ezert$$1.HyperLink1 === null ? null : ezert$$1.HyperLink1.eze$$clone();
				ezert$$2.HyperLink2 = ezert$$1.HyperLink2 === null ? null : ezert$$1.HyperLink2.eze$$clone();
				ezert$$2.HyperLink3 = ezert$$1.HyperLink3 === null ? null : ezert$$1.HyperLink3.eze$$clone();
				ezert$$2.Box2 = ezert$$1.Box2 === null ? null : ezert$$1.Box2.eze$$clone();
				ezert$$2.myImage = ezert$$1.myImage === null ? null : ezert$$1.myImage.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "LearningRecommendBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "bodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "head", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLink1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLink2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLink3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Box2", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "myImage", sig: "org.eclipse.edt.rui.widgets.Image"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("MyLearnRecommend", null, false);
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
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("LearningRecommendBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("LearningRecommendBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("LearningRecommendBox", "LearningRecommendBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("bodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("bodyBox");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("bodyBox", "bodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("head", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("head");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("head", "head", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLink1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLink1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("HyperLink1", "HyperLink1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLink2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLink2");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("HyperLink2", "HyperLink2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLink3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLink3");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("HyperLink3", "HyperLink3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box2");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Box2", "Box2", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myImage", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myImage");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("myImage", "myImage", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
			}
			,
			"toString": function() {
				return "[MyLearnRecommend]";
			}
		}
	);
});
