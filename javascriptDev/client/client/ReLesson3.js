define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/HTML", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "ReLesson3", {
		"eze$$fileName" : "client/client/ReLesson3.egl",
		"eze$$runtimePropertiesFile" : "client/client/ReLesson3",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Lesson1Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TitleBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.LessonTitle = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.ButtonsBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button1 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button2 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button3 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button4 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button5 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button6 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button7 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button8 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.contentBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.topBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.leftBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.leftImage = new egl.org.eclipse.edt.rui.widgets.Image();
				this.leftText = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.bodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HTML1 = new egl.org.eclipse.edt.rui.widgets.HTML();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,17,633,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,17,646,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,17,656,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,17,673,25, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,18,734,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,18,754,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,18,763,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,18,734,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,18,721,54, this);
					this.Lesson1Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,18,777,9, this);
					this.Lesson1Box.setPadding(8);
					egl.atLine(this.eze$$fileName,19,793,35, this);
					this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TitleBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.contentBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,20,835,13, this);
					this.Lesson1Box.setWidth("900");
					egl.atLine(this.eze$$fileName,21,855,11, this);
					this.Lesson1Box.setColumns(1);
					egl.atLine(this.eze$$fileName,23,894,9, this);
					this.TitleBox.setPadding(8);
					egl.atLine(this.eze$$fileName,24,910,38, this);
					this.TitleBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LessonTitle,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonsBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,956,32, this);
					this.TitleBox.setBackgroundColor("LightSkyBlue");
					egl.atLine(this.eze$$fileName,26,995,13, this);
					this.TitleBox.setWidth("900");
					egl.atLine(this.eze$$fileName,27,1015,13, this);
					this.TitleBox.setHeight("50");
					egl.atLine(this.eze$$fileName,28,1035,11, this);
					this.TitleBox.setColumns(2);
					egl.atLine(this.eze$$fileName,29,1077,9, this);
					this.LessonTitle.setText("\u9ad8\u77ee");
					egl.atLine(this.eze$$fileName,30,1094,13, this);
					this.LessonTitle.setFont("\u534e\u6587\u65b0\u9b4f");
					egl.atLine(this.eze$$fileName,31,1114,15, this);
					this.LessonTitle.setFontSize("30");
					egl.atLine(this.eze$$fileName,32,1153,9, this);
					this.ButtonsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,33,1169,14, this);
					this.ButtonsBox.setMarginTop(20);
					egl.atLine(this.eze$$fileName,34,1190,15, this);
					this.ButtonsBox.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,35,1212,11, this);
					this.ButtonsBox.setColumns(8);
					egl.atLine(this.eze$$fileName,36,1230,85, this);
					this.ButtonsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button5,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button6,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button7,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button8,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,37,1339,13, this);
					this.Button1.setText("\u8bfe\u7a0b\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,38,1359,15, this);
					this.Button1.setFontSize("14");
					egl.atLine(this.eze$$fileName,39,1381,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,40,1418,13, this);
					this.Button2.setText("\u6559\u5e08\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,41,1438,15, this);
					this.Button2.setFontSize("14");
					egl.atLine(this.eze$$fileName,42,1460,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,43,1497,13, this);
					this.Button3.setText("\u6307\u5b9a\u6559\u6750");
					egl.atLine(this.eze$$fileName,44,1517,15, this);
					this.Button3.setFontSize("14");
					egl.atLine(this.eze$$fileName,45,1539,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,46,1576,13, this);
					this.Button4.setText("\u5b66\u4e60\u65b9\u6cd5");
					egl.atLine(this.eze$$fileName,47,1596,15, this);
					this.Button4.setFontSize("14");
					egl.atLine(this.eze$$fileName,48,1618,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1656,13, this);
					this.Button5.setText("\u6559\u5b66\u76ee\u6807");
					egl.atLine(this.eze$$fileName,50,1676,15, this);
					this.Button5.setFontSize("14");
					egl.atLine(this.eze$$fileName,51,1698,13, this);
					this.Button5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,1735,13, this);
					this.Button6.setText("\u6559\u5b66\u91cd\u70b9");
					egl.atLine(this.eze$$fileName,53,1755,15, this);
					this.Button6.setFontSize("14");
					egl.atLine(this.eze$$fileName,54,1777,13, this);
					this.Button6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,55,1814,13, this);
					this.Button7.setText("\u4f5c\u4e1a\u4e60\u9898");
					egl.atLine(this.eze$$fileName,56,1834,15, this);
					this.Button7.setFontSize("14");
					egl.atLine(this.eze$$fileName,57,1856,13, this);
					this.Button7.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,58,1893,13, this);
					this.Button8.setText("\u6388\u8bfe\u65f6\u957f");
					egl.atLine(this.eze$$fileName,59,1913,15, this);
					this.Button8.setFontSize("14");
					egl.atLine(this.eze$$fileName,60,1935,13, this);
					this.Button8.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,62,1978,9, this);
					this.contentBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,1988,9, this);
					this.contentBox.setColumns(1);
					egl.atLine(this.eze$$fileName,62,1999,26, this);
					this.contentBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.topBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2044,9, this);
					this.topBox.setPadding(8);
					egl.atLine(this.eze$$fileName,63,2055,9, this);
					this.topBox.setColumns(2);
					egl.atLine(this.eze$$fileName,63,2066,18, this);
					this.topBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,64,2091,13, this);
					this.topBox.setWidth("840");
					egl.atLine(this.eze$$fileName,66,2134,9, this);
					this.leftBox.setPadding(8);
					egl.atLine(this.eze$$fileName,66,2145,9, this);
					this.leftBox.setColumns(2);
					egl.atLine(this.eze$$fileName,67,2161,34, this);
					this.leftBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftImage,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftText,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,69,2224,39, this);
					this.leftImage.setSrc("E:\\workspace\\pictures\\\u56fe\u6807.jpg");
					egl.atLine(this.eze$$fileName,71,2295,16, this);
					this.leftText.setText("\u8bfe \u7a0b \u7b80 \u4ecb");
					egl.atLine(this.eze$$fileName,72,2318,15, this);
					this.leftText.setFontSize("16");
					egl.atLine(this.eze$$fileName,76,2366,9, this);
					this.bodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,76,2377,9, this);
					this.bodyBox.setColumns(1);
					egl.atLine(this.eze$$fileName,77,2392,20, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HTML1,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,78,2430,428, this);
					this.HTML1.setText((((((((((("<li><b>\u6d3b\u52a8\u4e00\u3001\u60c5\u5883\u5f15\u5165 </b></li><p>\u64ad\u653e\u300a\u67ef\u5357\u300b\u7247\u6bb5\uff0c\u4f60\u559c\u6b22\u67ef\u5357\u5417?\u67ef\u5357\u6293\u574f\u4eba\u53ef\u5389\u5bb3\u5462\uff0c\u4e3a\u4ec0\u4e48\u5462?\u56e0\u4e3a\u4ed6\u89c2\u5bdf\u4e8b\u7269\u975e\u5e38\u4ed4\u7ec6\uff0c\u7ec6\u5c0f\u7684\u5dee\u522b\u4e5f\u80fd\u770b\u51fa\u3002\u4eca\u5929\u6211\u4eec\u5c31\u5b66\u4e60\u4ed6\u8fd9\u79cd\u7ec6\u81f4\u5165\u5fae\u7684\u89c2\u5bdf\u7cbe\u795e\uff0c\u770b\u8c01\u89c2\u5bdf\u6700\u4ed4\u7ec6!</p>") + "<li><b>\u6d3b\u52a8\u4e8c\uff1a\u89c2\u5bdf\u4e3b\u9898\u56fe</b></li><p>\u51fa\u793a\u4e3b\u9898\u56fe</p>")) + "<p>\u89c2\u5bdf\u56fe\uff0c\u548c\u540c\u684c\u4e92\u76f8\u8bf4\u4e00\u8bf4\u56fe\u4e0a\u6709\u51e0\u4e2a\u4eba\uff0c\u4ed6\u4eec\u5728\u5e72\u4ec0\u4e48?\u5f15\u5bfc\u5b66\u751f\u4ed4\u7ec6\u89c2\u5bdf\uff1a\u4f60\u600e\u4e48\u77e5\u9053\u662f\u5728\u8def\u4e0a?\u4f60\u600e\u4e48\u77e5\u9053\u662f\u76f2\u4eba?   </p>")) + "<p>\u628a\u56fe\u4e0a\u7684\u4e09\u4e2a\u4eba\u8fdb\u884c\u6bd4\u8f83\uff0c\u4f60\u53d1\u73b0\u4e86\u4ec0\u4e48?</p>")) + "<p>\u4ed6\u4eec\u4e09\u4e2a\u4eba\u4e2d\uff0c\u8c01\u9ad8\uff0c\u8c01\u77ee?\uff08 \u6bd4\u8f83\u540e\u677f\u4e66\uff1a\u9ad8 \u77ee\uff09  </p>")) + "<p>\u56fe\u4e0a\u7684\u4e24\u4e2a\u5c0f\u670b\u53cb\uff0c\u53c8\u662f\u8c01\u9ad8\u8c01\u77ee\u5462\uff1f  </p>"));
					egl.atLine(this.eze$$fileName,84,2864,13, this);
					this.HTML1.setWidth("800");
					egl.atLine(this.eze$$fileName,85,2883,15, this);
					this.HTML1.setFontSize("14");
					egl.atLine(this.eze$$fileName,15,521,15, this);
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
				var ezert$$2 = new egl.client.client.ReLesson3();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Lesson1Box = ezert$$1.Lesson1Box === null ? null : ezert$$1.Lesson1Box.eze$$clone();
				ezert$$2.TitleBox = ezert$$1.TitleBox === null ? null : ezert$$1.TitleBox.eze$$clone();
				ezert$$2.LessonTitle = ezert$$1.LessonTitle === null ? null : ezert$$1.LessonTitle.eze$$clone();
				ezert$$2.ButtonsBox = ezert$$1.ButtonsBox === null ? null : ezert$$1.ButtonsBox.eze$$clone();
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1.eze$$clone();
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2.eze$$clone();
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3.eze$$clone();
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4.eze$$clone();
				ezert$$2.Button5 = ezert$$1.Button5 === null ? null : ezert$$1.Button5.eze$$clone();
				ezert$$2.Button6 = ezert$$1.Button6 === null ? null : ezert$$1.Button6.eze$$clone();
				ezert$$2.Button7 = ezert$$1.Button7 === null ? null : ezert$$1.Button7.eze$$clone();
				ezert$$2.Button8 = ezert$$1.Button8 === null ? null : ezert$$1.Button8.eze$$clone();
				ezert$$2.contentBox = ezert$$1.contentBox === null ? null : ezert$$1.contentBox.eze$$clone();
				ezert$$2.topBox = ezert$$1.topBox === null ? null : ezert$$1.topBox.eze$$clone();
				ezert$$2.leftBox = ezert$$1.leftBox === null ? null : ezert$$1.leftBox.eze$$clone();
				ezert$$2.leftImage = ezert$$1.leftImage === null ? null : ezert$$1.leftImage.eze$$clone();
				ezert$$2.leftText = ezert$$1.leftText === null ? null : ezert$$1.leftText.eze$$clone();
				ezert$$2.bodyBox = ezert$$1.bodyBox === null ? null : ezert$$1.bodyBox.eze$$clone();
				ezert$$2.HTML1 = ezert$$1.HTML1 === null ? null : ezert$$1.HTML1.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Lesson1Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TitleBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "LessonTitle", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "ButtonsBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button1", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button2", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button3", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button4", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button5", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button6", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button7", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button8", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "contentBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "topBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "leftBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "leftImage", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "leftText", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "bodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HTML1", sig: "org.eclipse.edt.rui.widgets.HTML"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("ReLesson3", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Box");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Lesson1Box", "Lesson1Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TitleBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TitleBox");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("TitleBox", "TitleBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("LessonTitle", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("LessonTitle");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("LessonTitle", "LessonTitle", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ButtonsBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ButtonsBox");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("ButtonsBox", "ButtonsBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button1");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("Button1", "Button1", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button2");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Button2", "Button2", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button3");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Button3", "Button3", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button4");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("Button4", "Button4", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button5");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("Button5", "Button5", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button6", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button6");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Button6", "Button6", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button7", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button7");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Button7", "Button7", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button8", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button8");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Button8", "Button8", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("contentBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("contentBox");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("contentBox", "contentBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("topBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("topBox");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("topBox", "topBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftBox");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("leftBox", "leftBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftImage", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftImage");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("leftImage", "leftImage", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftText");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("leftText", "leftText", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("bodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("bodyBox");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("bodyBox", "bodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HTML1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HTML1");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("HTML1", "HTML1", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,87,2909,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[ReLesson3]";
			}
			,
			"eze$$getName": function() {
				return "ReLesson3";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Lesson1Box", value : eze$$parent.Lesson1Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson1Box"},
				{name: "TitleBox", value : eze$$parent.TitleBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "TitleBox"},
				{name: "LessonTitle", value : eze$$parent.LessonTitle, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "LessonTitle"},
				{name: "ButtonsBox", value : eze$$parent.ButtonsBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "ButtonsBox"},
				{name: "Button1", value : eze$$parent.Button1, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button4"},
				{name: "Button5", value : eze$$parent.Button5, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button5"},
				{name: "Button6", value : eze$$parent.Button6, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button6"},
				{name: "Button7", value : eze$$parent.Button7, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button7"},
				{name: "Button8", value : eze$$parent.Button8, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button8"},
				{name: "contentBox", value : eze$$parent.contentBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "contentBox"},
				{name: "topBox", value : eze$$parent.topBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "topBox"},
				{name: "leftBox", value : eze$$parent.leftBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "leftBox"},
				{name: "leftImage", value : eze$$parent.leftImage, type : "org.eclipse.edt.rui.widgets.Image", jsName : "leftImage"},
				{name: "leftText", value : eze$$parent.leftText, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "leftText"},
				{name: "bodyBox", value : eze$$parent.bodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "bodyBox"},
				{name: "HTML1", value : eze$$parent.HTML1, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "HTML1"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
