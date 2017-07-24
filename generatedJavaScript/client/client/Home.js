define(["eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Div", "ezekw$$dojo/widgets/eze$$DojoTitlePane", "org/eclipse/edt/rui/widgets/GridLayout"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Home", {
		"eze$$fileName" : "client/client/Home.egl",
		"eze$$runtimePropertiesFile" : "client/client/Home",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Boxbody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.BoxNewProduct = new egl.org.eclipse.edt.rui.widgets.Box();
				this.NewProduct = new egl.dojo.widgets.DojoTitlePane();
				this.NewProduct1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct5 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product = new egl.dojo.widgets.DojoTitlePane();
				this.Product1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.ProductOne = new egl.dojo.widgets.DojoTitlePane();
				this.ProductOne1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOneMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(3);
				this.ui.setRows(1);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNewProduct,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Boxbody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.Boxbody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Boxbody.setPadding(8);
				this.Boxbody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.Boxbody.setWidth("280");
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.BoxNewProduct.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxNewProduct.setPadding(8);
				this.BoxNewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxNewProduct.setWidth("280");
				this.NewProduct.title = "\u6559\u5b66\u5929\u5730";
				this.NewProduct.setOpen(true);
				this.NewProduct.duration = 1000;
				this.NewProduct.setWidth("280");
				var eze$LNNTemp3 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp4 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp4;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct5,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp3 = eze$SettingTarget1;
				}
				this.NewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.NewProduct.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.NewProduct.setFontSize("14");
				this.NewProduct1.setText("\u5c0f\u5b66\u4e00\u5e74\u7ea7\u5b66\u751f\u5b66\u4e60\u6307\u5bfc");
				this.NewProduct1.setHref("http://www.dingboshi.com/education/detail413.htm");
				this.NewProduct2.setText("\u5c0f\u5b66\u6570\u5b66\u590d\u4e60\u65b9\u6cd5\u6307\u5bfc");
				this.NewProduct2.setHref("http://www.dingboshi.com/education/detail423.htm");
				this.NewProduct3.setText("\u5c0f\u5b66\u6570\u5b66\u9ad8\u6548\u590d\u4e60\u6280\u5de7\uff1a\u505a\u597d\u54ea\u4e9b\u8f85\u5bfc");
				this.NewProduct3.setHref("http://www.dingboshi.com/education/detail412.htm");
				this.NewProduct4.setText("\u5c0f\u5b66\u6570\u5b66\u5b66\u4e60\u65b9\u6cd5\u6709\u54ea\u4e9b");
				this.NewProduct4.setHref("http://www.dingboshi.com/education/detail350.htm");
				this.NewProduct5.setText("\u5c0f\u5b66\u6570\u5b66\u9ad8\u6548\u590d\u4e60\u7684\u4e94\u628a\u5229\u5251");
				this.NewProduct5.setHref("http://www.dingboshi.com/education/detail194.htm");
				this.NewProductMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.NewProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.NewProductMore.setMarginTop(10);
				this.Product.title = "\u70ed\u95e8\u8bfe\u7a0b";
				this.Product.setOpen(true);
				this.Product.duration = 1000;
				this.Product.setWidth("280");
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp6 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp6;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp5 = eze$SettingTarget1;
				}
				this.Product.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.Product.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Product.setFontSize("14");
				this.Product1.setText("1\u30012\u30013\u7684\u8ba4\u8bc6");
				this.Product1.setHref("http://www.shuxueweb.com/Article/Class8/Class17/200308/127.html");
				this.Product2.setText("\u8ba4\u8bc6\u949f");
				this.Product2.setHref("http://www.shuxueweb.com/Article/Class8/Class17/200311/925.html");
				this.Product3.setText("\u4e24\u4f4d\u6570\u52a0\u4e24\u4f4d\u6570\uff08\u7ad6\u5f0f\uff09");
				this.Product3.setHref("http://www.shuxueweb.com/Article/Class8/Class17/Class51/200309/465.html");
				this.Product4.setText("\u56fe\u753b\u5e94\u7528\u9898");
				this.Product4.setHref("http://www.shuxueweb.com/Article/Class8/Class17/Class51/200401/1293.html");
				this.ProductMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.ProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.ProductMore.setMarginTop(10);
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 3;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
				}
				this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box1.setPadding(8);
				this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.Box1.setWidth("280");
				this.ProductOne.title = "\u6559\u5b66\u8bba\u575b";
				this.ProductOne.setOpen(true);
				this.ProductOne.duration = 1000;
				this.ProductOne.setWidth("280");
				var eze$LNNTemp8 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp9 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp9;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOneMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp8 = eze$SettingTarget1;
				}
				this.ProductOne.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.ProductOne.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.ProductOne.setFontSize("14");
				this.ProductOne1.setText(" \u5bb6\u957f\u5982\u4f55\u8f85\u5bfc\u5b69\u5b50\u5199\u4f5c\u4e1a");
				this.ProductOne1.setHref("http://www.dingboshi.com/forum/detail1_5_249.htm");
				this.ProductOne2.setText("\u5982\u4f55\u5e2e\u5b69\u5b50\u63d0\u9ad8\u6570\u5b66\u6210\u7ee9");
				this.ProductOne2.setHref("http://www.dingboshi.com/forum/detail1_5_242.htm");
				this.ProductOne3.setText(" \u5b69\u5b50\u6210\u7ee9\u4e0d\u7406\u60f3\u8be5\u600e\u4e48\u529e");
				this.ProductOne3.setHref("http://www.dingboshi.com/forum/detail1_5_228.htm");
				this.ProductOne4.setText("\u5bb6\u957f\u6559\u80b2\u5b69\u5b50\u7684\u539f\u5219\u6709\u54ea\u4e9b");
				this.ProductOne4.setHref("http://www.dingboshi.com/forum/detail1_4_111.htm");
				this.ProductOneMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.ProductOneMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.ProductOneMore.setMarginTop(10);
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Home();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Boxbody = ezert$$1.Boxbody === null ? null : ezert$$1.Boxbody.eze$$clone();
				ezert$$2.BoxNewProduct = ezert$$1.BoxNewProduct === null ? null : ezert$$1.BoxNewProduct.eze$$clone();
				ezert$$2.NewProduct = ezert$$1.NewProduct === null ? null : ezert$$1.NewProduct;
				ezert$$2.NewProduct1 = ezert$$1.NewProduct1 === null ? null : ezert$$1.NewProduct1.eze$$clone();
				ezert$$2.NewProduct2 = ezert$$1.NewProduct2 === null ? null : ezert$$1.NewProduct2.eze$$clone();
				ezert$$2.NewProduct3 = ezert$$1.NewProduct3 === null ? null : ezert$$1.NewProduct3.eze$$clone();
				ezert$$2.NewProduct4 = ezert$$1.NewProduct4 === null ? null : ezert$$1.NewProduct4.eze$$clone();
				ezert$$2.NewProduct5 = ezert$$1.NewProduct5 === null ? null : ezert$$1.NewProduct5.eze$$clone();
				ezert$$2.NewProductMore = ezert$$1.NewProductMore === null ? null : ezert$$1.NewProductMore.eze$$clone();
				ezert$$2.Product = ezert$$1.Product === null ? null : ezert$$1.Product;
				ezert$$2.Product1 = ezert$$1.Product1 === null ? null : ezert$$1.Product1.eze$$clone();
				ezert$$2.Product2 = ezert$$1.Product2 === null ? null : ezert$$1.Product2.eze$$clone();
				ezert$$2.Product3 = ezert$$1.Product3 === null ? null : ezert$$1.Product3.eze$$clone();
				ezert$$2.Product4 = ezert$$1.Product4 === null ? null : ezert$$1.Product4.eze$$clone();
				ezert$$2.ProductMore = ezert$$1.ProductMore === null ? null : ezert$$1.ProductMore.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.ProductOne = ezert$$1.ProductOne === null ? null : ezert$$1.ProductOne;
				ezert$$2.ProductOne1 = ezert$$1.ProductOne1 === null ? null : ezert$$1.ProductOne1.eze$$clone();
				ezert$$2.ProductOne2 = ezert$$1.ProductOne2 === null ? null : ezert$$1.ProductOne2.eze$$clone();
				ezert$$2.ProductOne3 = ezert$$1.ProductOne3 === null ? null : ezert$$1.ProductOne3.eze$$clone();
				ezert$$2.ProductOne4 = ezert$$1.ProductOne4 === null ? null : ezert$$1.ProductOne4.eze$$clone();
				ezert$$2.ProductOneMore = ezert$$1.ProductOneMore === null ? null : ezert$$1.ProductOneMore.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Boxbody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "BoxNewProduct", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "NewProduct", sig: "dojo.widgets.DojoTitlePane"},
					{name: "NewProduct1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct5", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product", sig: "dojo.widgets.DojoTitlePane"},
					{name: "Product1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "ProductOne", sig: "dojo.widgets.DojoTitlePane"},
					{name: "ProductOne1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOneMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Home", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Boxbody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Boxbody");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Boxbody", "Boxbody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxNewProduct", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxNewProduct");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("BoxNewProduct", "BoxNewProduct", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("NewProduct1", "NewProduct1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct2");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("NewProduct2", "NewProduct2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct3");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("NewProduct3", "NewProduct3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct4");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("NewProduct4", "NewProduct4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct5");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("NewProduct5", "NewProduct5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProductMore");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("NewProductMore", "NewProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product1");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Product1", "Product1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product2");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Product2", "Product2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product3");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("Product3", "Product3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product4");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Product4", "Product4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductMore");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("ProductMore", "ProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne1");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("ProductOne1", "ProductOne1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne2");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("ProductOne2", "ProductOne2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne3");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("ProductOne3", "ProductOne3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne4");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("ProductOne4", "ProductOne4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOneMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOneMore");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("ProductOneMore", "ProductOneMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
			}
			,
			"toString": function() {
				return "[Home]";
			}
		}
	);
});
