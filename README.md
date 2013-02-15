# jQuery-Columnize v1.0

## Description
Columnize allows you to split any text into equal size columns.
It will columnize &lt;p&gt;'s wrapped in &lt;div&gt;'s

## Demo
[Demo Columnize](http://promatik.no.sapo.pt/github/columnize/)

## Download
* [Master branch](https://github.com/promatik/jquery-columnize/archive/master.zip)

## Setup
* How to setup the plugin on your website:

```javascript
<script src="jquery.columnize.min.js"></script>
```

* You can style the generated columns by using its class .flowColumn, i.e:

```css
.flowColumn {
	float:left;
	margin: 20px 5px;
}
```

* Easy to use, just call columnize with the sizes you want, i.e:

```javascript
$('.lorem-ipsum').columnize({
	width:210,
	height:300
});
```

## Support
* **Support requests** and **general discussions** about the jQuery Columnize plugin can be posted to the official [support forum](https://groups.google.com/forum/#!forum/jquery-columnize).  
If your question is not directly related to the Social SDks plugin, you might have a better chance to get a reply by posting to [Stack Overflow](http://stackoverflow.com/questions/tagged/promatik+jquery-columnize). 
* **Bugs** and **Feature requests** can be reported using the [issues tracker](https://github.com/promatik/jquery-columnize/issues).

## Requirements
* [jQuery](http://jquery.com/) v. 1.6+

## Browsers

### Desktop browsers
The jQuery Columnize plugin is supported by the following minimal versions:

* Google Chrome
* Apple Safari 4.0+
* Mozilla Firefox 3.0+
* Opera 11.0+
* Microsoft Internet Explorer 6.0+

## License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).
