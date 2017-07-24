package client.common;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import org.eclipse.edt.runtime.java.eglx.lang.AnyValue;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="Article")
public class Article extends org.eclipse.edt.runtime.java.eglx.lang.AnyValue {
	private static final long serialVersionUID = 10L;
	@javax.xml.bind.annotation.XmlTransient
	public int article_id;
	@javax.xml.bind.annotation.XmlTransient
	public String title;
	private static java.util.HashMap<String, TypeConstraints> ezeTypeConstraints = new java.util.HashMap<String, TypeConstraints>();
	static {
		ezeTypeConstraints.put("title", new TypeConstraints(EString.class));
	}
	public Article() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeCopy(Object source) {
		ezeCopy((Article) source);
	}
	public void ezeCopy(eglx.lang.AnyValue source) {
		this.article_id = ((Article) source).article_id;
		this.title = ((Article) source).title;
	}
	public Article ezeNewValue(Object... args) {
		return new Article();
	}
	public void ezeSetEmpty() {
		article_id = 0;
		title = "";
	}
	public boolean isVariableDataLength() {
		return false;
	}
	public void loadFromBuffer(ByteStorage buffer, Program program) {
	}
	public int sizeInBytes() {
		return 0;
	}
	public void storeInBuffer(ByteStorage buffer) {
	}
	public void ezeInitialize() {
		article_id = 0;
		title = "";
	}
	@javax.xml.bind.annotation.XmlElement(name="article_id", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="article_id", clazz=EInt.class, asOptions={})
	public int getArticle_id(){
		return article_id;
	}
	public void setArticle_id(int ezeValue){
		article_id = ezeValue;
	}
	@javax.xml.bind.annotation.XmlElement(name="title", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="title", clazz=EString.class, asOptions={"255"})
	public String getTitle(){
		return title;
	}
	public void setTitle(String ezeValue){
		title = ezeValue;
	}
}
