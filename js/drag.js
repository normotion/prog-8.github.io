// JavaScript Document

	
//ドラッグ&ドロップで入れ替え部分の記述	
function dragstart()
{
	//ドラッグ元のIDを保存
	event.dataTransfer.setData("text/plain", event.target.id);
}
function dragover()
{
	event.preventDefault();
}
function drop(obj)
{
	event.preventDefault();
	//ドラッグしている画像のIDを取得
	var id = event.dataTransfer.getData("text/plain");
	//ドロップ先のsrcを保存
	var buff = obj.src;
	//ドロップ先のsrcにドラッグ元のsrcを上書き
	obj.src = document.getElementById(id).src;
	//保存していたsrcをドラッグ元のsrcへ上書き
	document.getElementById(id).src = buff;
}
	
