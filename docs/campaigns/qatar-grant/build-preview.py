from pathlib import Path
import re,base64
R=Path(__file__).resolve().parents[3]
def uri(p):
 ext=p.suffix.lower();mime={'.woff':'font/woff','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp'}[ext]
 return 'data:'+mime+';base64,'+base64.b64encode(p.read_bytes()).decode()
s=(R/'qatar-grant.html').read_text()
s=re.sub(r'<link rel="preload"[^>]+>','',s)
s=re.sub(r'<script src="content/js/(?:qatar-grant|lang)\.js" defer></script>','',s)
css=(R/'content/css/qatar-grant.css').read_text();css=re.sub(r"url\('([^']+)'\)",lambda m:"url('"+uri((R/'content/css'/m[1]).resolve())+"')",css)
s=s.replace('<link rel="stylesheet" href="content/css/qatar-grant.css">','<style>'+css+'</style>')
s=re.sub(r'src="(content/assets/[^\"]+)"',lambda m:'src="'+uri(R/m[1])+'"',s)
s=re.sub(r'href="\./([^\"]+)"',lambda m:'href="https://hagzz.el7lm.com/'+m[1]+'"',s)
js=''.join('<script>'+ (R/'content/js'/name).read_text()+'</script>' for name in ['qatar-grant.js','lang.js'])
s=s.replace('</body>',js+'</body>')
p=R/'docs/campaigns/qatar-grant/Hagzz-Qatar-Grant-Preview.html';p.write_text(s);print('Standalone preview bytes:',p.stat().st_size)
