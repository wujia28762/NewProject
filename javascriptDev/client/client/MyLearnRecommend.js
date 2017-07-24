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
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,14,532,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,14,545,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,14,555,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,14,572,35, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LearningRecommendBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,16,658,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,16,678,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,16,687,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,16,658,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,16,645,54, this);
					this.LearningRecommendBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,16,701,9, this);
					this.LearningRecommendBox.setPadding(4);
					egl.atLine(this.eze$$fileName,17,717,28, this);
					this.LearningRecommendBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,18,752,11, this);
					this.LearningRecommendBox.setColumns(2);
					egl.atLine(this.eze$$fileName,20,789,9, this);
					this.bodyBox.setPadding(4);
					egl.atLine(this.eze$$fileName,20,800,9, this);
					this.bodyBox.setColumns(1);
					egl.atLine(this.eze$$fileName,21,819,51, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.head,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink3,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,22,897,20, this);
					this.head.setText("\u53ef\u80fd\u7b26\u5408\u60a8\u9700\u6c42\u7684\u8bfe\u7a0b\u5217\u8868\uff1a");
					egl.atLine(this.eze$$fileName,23,924,13, this);
					this.head.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,24,944,15, this);
					this.head.setFontSize("14");
					egl.atLine(this.eze$$fileName,25,989,9, this);
					this.HyperLink1.setText("\u73a9\u5177");
					egl.atLine(this.eze$$fileName,26,1008,74, this);
					this.HyperLink1.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson1.html");
					egl.atLine(this.eze$$fileName,27,1089,13, this);
					this.HyperLink1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,28,1109,15, this);
					this.HyperLink1.setFontSize("14");
					egl.atLine(this.eze$$fileName,29,1131,14, this);
					this.HyperLink1.setMarginTop(10);
					egl.atLine(this.eze$$fileName,30,1175,9, this);
					this.HyperLink2.setText("\u6587\u5177");
					egl.atLine(this.eze$$fileName,31,1194,13, this);
					this.HyperLink2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,32,1214,15, this);
					this.HyperLink2.setFontSize("14");
					egl.atLine(this.eze$$fileName,33,1236,74, this);
					this.HyperLink2.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson2.html");
					egl.atLine(this.eze$$fileName,34,1340,11, this);
					this.HyperLink3.setText("\u9ad8\u77ee");
					egl.atLine(this.eze$$fileName,35,1358,13, this);
					this.HyperLink3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,36,1378,15, this);
					this.HyperLink3.setFontSize("14");
					egl.atLine(this.eze$$fileName,37,1400,74, this);
					this.HyperLink3.setHref("http://192.168.1.119:5590/NewProject/client/client/ReLesson3.html");
					egl.atLine(this.eze$$fileName,38,1491,9, this);
					this.Box2.setPadding(8);
					egl.atLine(this.eze$$fileName,39,1507,22, this);
					this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myImage,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,40,1536,15, this);
					this.Box2.setMarginLeft(70);
					egl.atLine(this.eze$$fileName,42,1579,48, this);
					this.myImage.setSrc("E:\\workspace\\pictures\\recimage_\u526f\u672c.jpg");
					egl.atLine(this.eze$$fileName,12,401,15, this);
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
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,45,1640,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[MyLearnRecommend]";
			}
			,
			"eze$$getName": function() {
				return "MyLearnRecommend";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "LearningRecommendBox", value : eze$$parent.LearningRecommendBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "LearningRecommendBox"},
				{name: "bodyBox", value : eze$$parent.bodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "bodyBox"},
				{name: "head", value : eze$$parent.head, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "head"},
				{name: "HyperLink1", value : eze$$parent.HyperLink1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLink1"},
				{name: "HyperLink2", value : eze$$parent.HyperLink2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLink2"},
				{name: "HyperLink3", value : eze$$parent.HyperLink3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLink3"},
				{name: "Box2", value : eze$$parent.Box2, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box2"},
				{name: "myImage", value : eze$$parent.myImage, type : "org.eclipse.edt.rui.widgets.Image", jsName : "myImage"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
