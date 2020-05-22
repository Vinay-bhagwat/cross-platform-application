
  Pod::Spec.new do |s|
    s.name = 'ReactCapacitorPlugin'
    s.version = '0.0.1'
    s.summary = 'react capacitor plugin example'
    s.license = 'MIT'
    s.homepage = 'Vinay-bhagwat/cross-platform-application/react-capacitor-example'
    s.author = 'Vinay Bhagwat'
    s.source = { :git => 'Vinay-bhagwat/cross-platform-application/react-capacitor-example', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end