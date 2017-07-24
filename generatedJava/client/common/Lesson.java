package client.common;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import org.eclipse.edt.runtime.java.eglx.lang.AnyValue;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="Lesson")
public class Lesson extends org.eclipse.edt.runtime.java.eglx.lang.AnyValue {
	private static final long serialVersionUID = 10L;
	@javax.xml.bind.annotation.XmlTransient
	public int lesson_id;
	@javax.xml.bind.annotation.XmlTransient
	public String lessonname;
	@javax.xml.bind.annotation.XmlTransient
	public String coursecom;
	@javax.xml.bind.annotation.XmlTransient
	public String _url;
	private static java.util.HashMap<String, TypeConstraints> ezeTypeConstraints = new java.util.HashMap<String, TypeConstraints>();
	static {
		ezeTypeConstraints.put("lessonname", new TypeConstraints(EString.class));
		ezeTypeConstraints.put("coursecom", new TypeConstraints(EString.class));
		ezeTypeConstraints.put("_url", new TypeConstraints(EString.class));
	}
	public Lesson() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeCopy(Object source) {
		ezeCopy((Lesson) source);
	}
	public void ezeCopy(eglx.lang.AnyValue source) {
		this.lesson_id = ((Lesson) source).lesson_id;
		this.lessonname = ((Lesson) source).lessonname;
		this.coursecom = ((Lesson) source).coursecom;
		this._url = ((Lesson) source)._url;
	}
	public Lesson ezeNewValue(Object... args) {
		return new Lesson();
	}
	public void ezeSetEmpty() {
		lesson_id = 0;
		lessonname = "";
		coursecom = "";
		_url = null;
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
		lesson_id = 0;
		lessonname = "";
		coursecom = "";
		_url = null;
	}
	@javax.xml.bind.annotation.XmlElement(name="lesson_id", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="lesson_id", clazz=EInt.class, asOptions={})
	public int getLesson_id(){
		return lesson_id;
	}
	public void setLesson_id(int ezeValue){
		lesson_id = ezeValue;
	}
	@javax.xml.bind.annotation.XmlElement(name="lessonname", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="lessonname", clazz=EString.class, asOptions={"100"})
	public String getLessonname(){
		return lessonname;
	}
	public void setLessonname(String ezeValue){
		lessonname = ezeValue;
	}
	@javax.xml.bind.annotation.XmlElement(name="coursecom", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="coursecom", clazz=EString.class, asOptions={"255"})
	public String getCoursecom(){
		return coursecom;
	}
	public void setCoursecom(String ezeValue){
		coursecom = ezeValue;
	}
	@javax.xml.bind.annotation.XmlElement(name="_url", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="_url", clazz=EString.class, asOptions={"255"})
	public String get_url(){
		return _url;
	}
	public void set_url(String ezeValue){
		_url = ezeValue;
	}
}
