hostname = *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com

# Unblock TikTok
(?<=_region=)CN(?=&) url 307 JP
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302 $1$3
(^https?:\/\/*\.\w{4}okv.com\/.+&.+)(\d{2}\.3\.\d)(.+) url 302 $118.0$3