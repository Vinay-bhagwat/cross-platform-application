
  Pod::Spec.new do |s|
    s.name = 'ReactCapacitorPwa'
    s.version = '0.0.1'
    s.summary = 'progressive web application using react-capacitor from ionic framework'
    s.license = 'MIT'
    s.homepage = 'Vinay-bhagwat'
    s.author = 'Vinay Bhagwat'
    s.source = { :git => 'Vinay-bhagwat', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end