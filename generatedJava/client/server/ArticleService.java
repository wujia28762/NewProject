package client.server;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.javart.services.*;
import org.eclipse.edt.javart.Runtime;
import org.eclipse.edt.javart.json.Json;
import eglx.persistence.sql.SQLException;
import org.eclipse.edt.runtime.java.eglx.lang.EBoolean;
import java.lang.Boolean;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import eglx.persistence.sql.SQLDataSource;
import org.eclipse.edt.runtime.java.eglx.lang.EList;
import java.util.List;
import eglx.lang.SysLib;
import org.eclipse.edt.runtime.java.eglx.lang.AnyStruct;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import eglx.lang.AnyException;
import client.common.Article;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="ArticleService")
public class ArticleService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public transient SQLDataSource myArticleService;
	public boolean logActive;
	public String activeService;
	
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	
	public ArticleService() {
		super();
	}
	public void ezeInitialize() {
		activeService = "";
		myArticleService = org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(eglx.lang.Resources.getResource("binding:eLearnDerby"), SQLDataSource.class);
		logActive = true;
	}
	@FunctionSignature(name="addArticle", parameters={@FunctionParameter(jsonInfo=@Json(name="newArticle", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void addArticle(Article newArticle){
		logEntry("addArticles");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 0);
				if (ezeStatement== null) {
					String stmtStr = "insert into ARTICLE           (title)          values           (?)";
					ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr, java.sql.Statement.RETURN_GENERATED_KEYS);
					myArticleService.registerStatement("client.server.ArticleService", 0, ezeStatement);
				}
				ezeStatement.setString(1, newArticle.title);
				ezeStatement.execute();
				java.sql.ResultSet eze$Temp1 = ezeStatement.getGeneratedKeys();
				if (eze$Temp1 != null && eze$Temp1.next()) {
					newArticle.article_id = eze$Temp1.getInt(1);
				}
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
	}
	@FunctionSignature(name="getAllArticles", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Article> getAllArticles(){
		List<Article> Articles = EList.ezeNew(Article.class);
		logEntry("getAllArticles");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 1);
				if (ezeStatement== null) {
					String stmtStr = "select           article_id, title          from ARTICLE";
					ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
					myArticleService.registerStatement("client.server.ArticleService", 1, ezeStatement);
				}
				java.sql.ResultSet eze$Temp2 = ezeStatement.executeQuery();
				List<Article> ezeList = EList.ezeNew(Article.class);
				while(eze$Temp2.next()) {
					Article eze$Temp3 = new Article();
					eze$Temp3.article_id = eze$Temp2.getInt(1);
					eze$Temp3.title = eze$Temp2.getString(2);
					ezeList.add(eze$Temp3);
				}
				Articles = ezeList;
				eze$Temp2.close();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
		return Articles;
	}
	@FunctionSignature(name="editArticle", parameters={@FunctionParameter(jsonInfo=@Json(name="chgArticle", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void editArticle(Article chgArticle){
		logEntry("editArticles");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 2);
				if (ezeStatement== null) {
					String stmtStr = "update ARTICLE            set             title = ?            where             article_id = ?";
					ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
					myArticleService.registerStatement("client.server.ArticleService", 2, ezeStatement);
				}
				ezeStatement.setString(1, chgArticle.title);
				ezeStatement.setInt(2, chgArticle.article_id);
				ezeStatement.executeUpdate();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
	}
	@FunctionSignature(name="deleteArticle", parameters={@FunctionParameter(jsonInfo=@Json(name="delArticle", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void deleteArticle(Article delArticle){
		logEntry("deleteArticles");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 3);
				if (ezeStatement== null) {
					String stmtStr = "DELETE FROM USER_ARTICLE WHERE article_id = ?";
					ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
					myArticleService.registerStatement("client.server.ArticleService", 3, ezeStatement);
				}
				ezeStatement.setInt(1, delArticle.article_id);
				ezeStatement.execute();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			if ((EString.notEquals(ex.getSQLState(), "02000"))) {
				SQLException logException = new SQLException();
			}
		}
	}
	@FunctionSignature(name="createDefaultTable", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Article> createDefaultTable(){
		List<Article> Articles = EList.ezeNew(Article.class);
		logEntry("createDefaultTable");
		try {
			try {
				try {
					java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 4);
					if (ezeStatement== null) {
						String stmtStr = "delete from Article";
						ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
						myArticleService.registerStatement("client.server.ArticleService", 4, ezeStatement);
					}
					ezeStatement.execute();
				}
				catch(java.sql.SQLException ezeEx) {
					throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
				}
				;
			}
			catch (SQLException ex) {
				if ((EString.notEquals(ex.getSQLState(), "02000"))) {
					throw ex;
				}
			}
			Article eze$LNNTemp7 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 1;
				eze$SettingTarget1.title = EString.ezeCast("\u70ed\u70c8\u6b22\u8fceTesto\u5e97\u9762\u603b\u7ecf\u7406\u5149\u4e34\u6211\u53f8\u6307\u5bfc\u5de5\u4f5c", 255);
				eze$LNNTemp7 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
			}
			Article eze$Temp6 = null;
			eze$Temp6 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp7), eze$Temp6);
			addArticle(eze$Temp6);
			Article eze$LNNTemp9 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 2;
				eze$SettingTarget1.title = EString.ezeCast("\u6211\u516c\u53f8\u8363\u83b7Testo2012\u5e74\u5ea6\u5341\u4f73\u4ee3\u7406\u5e73\u53f0\u5956\u5956\u676f", 255);
				eze$LNNTemp9 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
			}
			Article eze$Temp8 = null;
			eze$Temp8 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp9), eze$Temp8);
			addArticle(eze$Temp8);
			Article eze$LNNTemp11 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 3;
				eze$SettingTarget1.title = EString.ezeCast("\u70ed\u70c8\u795d\u8d3a\u6211\u53f8\u5728\u5e7f\u4e1c\u7535\u7f51\u516c\u53f8\u73e0\u6d77\u4f9b\u7535\u5c40\u7535\u6d4b\u4e13\u4e1a\u5de5\u5668\u5177\u8d2d\u7f6e\u9879\u76ee\u4e2d\u6807", 255);
				eze$LNNTemp11 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
			}
			Article eze$Temp10 = null;
			eze$Temp10 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp11), eze$Temp10);
			addArticle(eze$Temp10);
			Article eze$LNNTemp13 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 4;
				eze$SettingTarget1.title = EString.ezeCast("\u70ed\u70c8\u795d\u8d3a\u6211\u516c\u53f8\u6210\u4e3aTesto 608-H2\u6e29\u6e7f\u5ea6\u8868\u5168\u56fd\u603b\u4ee3\u7406\u5e73\u53f0", 255);
				eze$LNNTemp13 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
			}
			Article eze$Temp12 = null;
			eze$Temp12 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp13), eze$Temp12);
			addArticle(eze$Temp12);
			Article eze$LNNTemp15 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 5;
				eze$SettingTarget1.title = EString.ezeCast("\u798f\u7984\u514b\u70ed\u50cf\u4eea\u65b0\u4ea7\u54c1Ti32\u66a8\u65b0\u54c1\u53d1\u5e03\u4f1a", 255);
				eze$LNNTemp15 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
			}
			Article eze$Temp14 = null;
			eze$Temp14 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp15), eze$Temp14);
			addArticle(eze$Temp14);
			Article eze$LNNTemp17 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 6;
				eze$SettingTarget1.title = EString.ezeCast("\u798f\u7984\u514b\u516c\u53f8\u5411\u707e\u533a\u6350\u8d60\u767e\u53f0\u6d4b\u8bd5\u4eea\u5668", 255);
				eze$LNNTemp17 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
			}
			Article eze$Temp16 = null;
			eze$Temp16 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp17), eze$Temp16);
			addArticle(eze$Temp16);
			Article eze$LNNTemp19 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 7;
				eze$SettingTarget1.title = EString.ezeCast("\u798f\u7984\u514b\u6700\u5c16\u7aef\u7684\u6570\u5b57\u5f0f\u624b\u6301\u4e07\u7528\u8868287/289\u706b\u70ed\u9884\u552e", 255);
				eze$LNNTemp19 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
			}
			Article eze$Temp18 = null;
			eze$Temp18 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp19), eze$Temp18);
			addArticle(eze$Temp18);
			Article eze$LNNTemp21 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 8;
				eze$SettingTarget1.title = EString.ezeCast("\u4e9a\u8fb0\u65b0\u7ad9\u5373\u65e5\u95ea\u4eae\u767b\u573a", 255);
				eze$LNNTemp21 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
			}
			Article eze$Temp20 = null;
			eze$Temp20 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp21), eze$Temp20);
			addArticle(eze$Temp20);
			Article eze$LNNTemp23 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 9;
				eze$SettingTarget1.title = EString.ezeCast("\u7aed\u8bda\u4e3a\u5ba2\u6237\u670d\u52a1\uff1a\u73b0\u63a8\u51fa\u70ed\u50cf\u4eea\u514d\u8d39\u68c0\u6d4b\u6d3b\u52a8", 255);
				eze$LNNTemp23 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp23);
			}
			Article eze$Temp22 = null;
			eze$Temp22 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp23), eze$Temp22);
			addArticle(eze$Temp22);
			Article eze$LNNTemp25 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 10;
				eze$SettingTarget1.title = EString.ezeCast("\u7f8e\u56fd\u798f\u7984\u514b\u516c\u53f8\u63a8\u51fa\u65b0\u5f0fFluke 8845A \u548c8846A\u7cbe\u5bc6\u6570\u5b57\u591a\u7528\u8868", 255);
				eze$LNNTemp25 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp25);
			}
			Article eze$Temp24 = null;
			eze$Temp24 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp25), eze$Temp24);
			addArticle(eze$Temp24);
			Article eze$LNNTemp27 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 11;
				eze$SettingTarget1.title = EString.ezeCast("\u70ed\u70c8\u795d\u8d3a\u6211\u53f8\u5de5\u7a0b\u5e08\u66fe\u5fd7\u5f3a\u83b7\u5f972008\u5e742\u6708\u70ed\u50cf\u4eea\u57f9\u8bad-\u6280\u672f\u51a0\u519b\u7ade\u8d5b", 255);
				eze$LNNTemp27 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp27);
			}
			Article eze$Temp26 = null;
			eze$Temp26 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp27), eze$Temp26);
			addArticle(eze$Temp26);
			Article eze$LNNTemp29 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 12;
				eze$SettingTarget1.title = EString.ezeCast("\u6211\u53f8\u8363\u4e2d\u6807\u4e2d\u56fd\u7535\u529b\u6280\u672f\u88c5\u5907\u6709\u9650\u516c\u53f82012\u5e74\u7b2c\u4e8c\u6279(\u8bbe\u5907\u7c7b)\u96c6\u4e2d\u89c4\u6a21\u62db\u6807\u91c7\u8d2d\u9879\u76ee", 255);
				eze$LNNTemp29 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp29);
			}
			Article eze$Temp28 = null;
			eze$Temp28 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp29), eze$Temp28);
			addArticle(eze$Temp28);
			Article eze$LNNTemp31 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 13;
				eze$SettingTarget1.title = EString.ezeCast("FLUKE\u65b0\u4ea7\u54c1Ti10\u3001Ti25\u4e00\u6708\u5341\u4e94\u65e5\u9686\u91cd\u4e0a\u5e02\uff01", 255);
				eze$LNNTemp31 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp31);
			}
			Article eze$Temp30 = null;
			eze$Temp30 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp31), eze$Temp30);
			addArticle(eze$Temp30);
			Articles = getAllArticles();
		}
		catch ( java.lang.Exception eze$Temp32 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp32 );
			AnyException ex;
			if ( eze$Temp32 instanceof AnyException ) {
				ex = (AnyException)eze$Temp32;
			}
			else {
				ex = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp32);
			}
			{
				logException(org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(ex, SQLException.class));
			}
		}
		return Articles;
	}
	@FunctionSignature(name="createDefaultTableNotice", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Article> createDefaultTableNotice(){
		List<Article> Articles = EList.ezeNew(Article.class);
		logEntry("createDefaultTableNotice");
		try {
			try {
				try {
					java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 5);
					if (ezeStatement== null) {
						String stmtStr = "delete from Article";
						ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
						myArticleService.registerStatement("client.server.ArticleService", 5, ezeStatement);
					}
					ezeStatement.execute();
				}
				catch(java.sql.SQLException ezeEx) {
					throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
				}
				;
			}
			catch (SQLException ex) {
				if ((EString.notEquals(ex.getSQLState(), "02000"))) {
					throw ex;
				}
			}
			Article eze$LNNTemp35 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 1;
				eze$SettingTarget1.title = EString.ezeCast("\u90e8\u4efd\u5171\u7acbKYORITSU\u4eea\u5668\u4eea\u8868\u5f00\u59cb\u505a\u6d3b\u52a8\u5566", 255);
				eze$LNNTemp35 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp35);
			}
			Article eze$Temp34 = null;
			eze$Temp34 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp35), eze$Temp34);
			addArticle(eze$Temp34);
			Article eze$LNNTemp37 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 2;
				eze$SettingTarget1.title = EString.ezeCast("\u798f\u7984\u514b\u5317\u4eac\u7ef4\u4fee\u7ad9\u8fc1\u5740\u901a\u77e5", 255);
				eze$LNNTemp37 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp37);
			}
			Article eze$Temp36 = null;
			eze$Temp36 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp37), eze$Temp36);
			addArticle(eze$Temp36);
			Article eze$LNNTemp39 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 3;
				eze$SettingTarget1.title = EString.ezeCast("2013\u5e74\u6625\u8282\u653e\u5047\u5b89\u6392\u901a\u77e5", 255);
				eze$LNNTemp39 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp39);
			}
			Article eze$Temp38 = null;
			eze$Temp38 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp39), eze$Temp38);
			addArticle(eze$Temp38);
			Articles = getAllArticles();
		}
		catch ( java.lang.Exception eze$Temp40 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp40 );
			AnyException ex;
			if ( eze$Temp40 instanceof AnyException ) {
				ex = (AnyException)eze$Temp40;
			}
			else {
				ex = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp40);
			}
			{
				logException(org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(ex, SQLException.class));
			}
		}
		return Articles;
	}
	@FunctionSignature(name="createDefaultTableReport", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Article.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Article> createDefaultTableReport(){
		List<Article> Articles = EList.ezeNew(Article.class);
		logEntry("createDefaultTableReport");
		try {
			try {
				try {
					java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myArticleService.getStatement("client.server.ArticleService", 6);
					if (ezeStatement== null) {
						String stmtStr = "delete from Article";
						ezeStatement = myArticleService.getConnection().prepareStatement(stmtStr);
						myArticleService.registerStatement("client.server.ArticleService", 6, ezeStatement);
					}
					ezeStatement.execute();
				}
				catch(java.sql.SQLException ezeEx) {
					throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
				}
				;
			}
			catch (SQLException ex) {
				if ((EString.notEquals(ex.getSQLState(), "02000"))) {
					throw ex;
				}
			}
			Article eze$LNNTemp43 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 1;
				eze$SettingTarget1.title = EString.ezeCast("\u4e2d\u56fd\u79bb\u5b50\u8272\u8c3130\u5e74\u7eaa\u5ff5\u6d3b\u52a8\u5f00\u5e55 \u573a\u9762\u706b\u7206\u5907\u53d7\u5173\u6ce8", 255);
				eze$LNNTemp43 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp43);
			}
			Article eze$Temp42 = null;
			eze$Temp42 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp43), eze$Temp42);
			addArticle(eze$Temp42);
			Article eze$LNNTemp45 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 2;
				eze$SettingTarget1.title = EString.ezeCast("\u63a8\u5e7f\u8282\u80fd\u4e0e\u65b0\u80fd\u6e90\u5ba2\u8f66 \u663e\u8457\u964d\u4f4e\u57ce\u5e02\u73af\u5883\u6cbb\u7406\u538b\u529b", 255);
				eze$LNNTemp45 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp45);
			}
			Article eze$Temp44 = null;
			eze$Temp44 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp45), eze$Temp44);
			addArticle(eze$Temp44);
			Article eze$LNNTemp47 = null;
			{
				Article eze$SettingTarget1 = new Article();
				eze$SettingTarget1.article_id = 3;
				eze$SettingTarget1.title = EString.ezeCast("\u6210\u90fd\u56fd\u9645\u73af\u5883\u76d1\u6d4b\u4eea\u5668\u5c55 \u6052\u751f\u77f3\u6cb9\u5927\u653e\u5f02\u5f69", 255);
				eze$LNNTemp47 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp47);
			}
			Article eze$Temp46 = null;
			eze$Temp46 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp47), eze$Temp46);
			addArticle(eze$Temp46);
			Articles = getAllArticles();
		}
		catch ( java.lang.Exception eze$Temp48 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp48 );
			AnyException ex;
			if ( eze$Temp48 instanceof AnyException ) {
				ex = (AnyException)eze$Temp48;
			}
			else {
				ex = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp48);
			}
			{
				logException(org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(ex, SQLException.class));
			}
		}
		return Articles;
	}
	@FunctionSignature(name="logEntry", parameters={@FunctionParameter(jsonInfo=@Json(name="serviceFunction", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logEntry(String serviceFunction){
		activeService = serviceFunction;
		log((("Entry:  ArticleService, ") + serviceFunction));
	}
	@FunctionSignature(name="logException", parameters={@FunctionParameter(jsonInfo=@Json(name="ex", clazz=SQLException.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logException(SQLException ex){
		String accumulatedMessage;
		accumulatedMessage = (("Exception:  ArticleService, ") + activeService);
		while ((org.eclipse.edt.runtime.java.eglx.lang.EAny.notEquals(ex, null))) {
			accumulatedMessage = (((((EString.plus(((accumulatedMessage) + ", SQLSTATE = "), org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getSQLState()))) + ", message = ")) + org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getMessage());
			ex = org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getNextException();
		}
		log(accumulatedMessage);
		AnyException eze$LNNTemp50 = null;
		{
			AnyException eze$SettingTarget1;
			eze$SettingTarget1 = new AnyException();
			eze$SettingTarget1.setMessage(accumulatedMessage);
			eze$LNNTemp50 = eze$SettingTarget1;
		}
		throw eze$LNNTemp50;
	}
	@FunctionSignature(name="log", parameters={@FunctionParameter(jsonInfo=@Json(name="text", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void log(String text){
		if (logActive) {
			SysLib.writeStdout(text);
		}
	}
}
