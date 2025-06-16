# Maintainer: ElCunq <elcunq@proton.me>
pkgname=youtube-desktop-client
pkgver=1.0.0
pkgrel=1
pkgdesc="Minimal YouTube Desktop Client with preinstalled uBlock Origin & SponsorBlock"
arch=('x86_64')
url="https://github.com/ElCunq/Youtube-Desktop"
license=('MIT')
depends=('gtk3' 'nss' 'xdg-utils')
source=("$pkgname-$pkgver.tar.gz")
sha256sums=('SKIP')

package() {
  mkdir -p "$pkgdir/opt/$pkgname"
  cp -r * "$pkgdir/opt/$pkgname"

  install -Dm755 start.sh "$pkgdir/usr/bin/youtube-desktop"
  ln -s "/opt/$pkgname/start.sh" "$pkgdir/usr/bin/youtube-desktop"

  install -Dm644 youtube.desktop "$pkgdir/usr/share/applications/youtube.desktop"
  install -Dm644 icon.png "$pkgdir/usr/share/pixmaps/youtube.png"
}

