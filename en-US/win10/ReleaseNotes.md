---
layout: default
title: Release Notes
permalink: /en-US/win10/ReleaseNotes.htm
lang: en-US
---

#Release Notes for Windows 10 IoT Core
Insider Preview Build Number 10556.0

&copy; 2015 Microsoft Corporation. All rights reserved

This document provides late-breaking or other information that supplements the documentation included with the Windows 10 IoT Core Insider Preview.

Thank you for downloading Windows 10 IoT Core Insider Preview. Windows 10 IoT Core is the version of Windows 10 intended for development of embedded or dedicated purpose devices and the choice for the Maker community. This package contains the bits and tools needed to install Windows 10 IoT Core on the MinnowBoard Max based on Intel&reg; Atom E38xx series SoC (also referred to as MBM board) and the Raspberry PI2 based on the ARM Cortex-A7 based SoC (also referred to as the RPI).

##Privacy Statement

The privacy statement for this version of the Windows operating system can be viewed here: [http://go.microsoft.com/fwlink/?LinkId=506737](http://go.microsoft.com/fwlink/?LinkId=506737){:target="_blank"}

You can review the privacy statement by pasting the forward link into your browser window.

##What's New
* Windows 10 IoT Core Insider Preview October 15 Release
   * Serial support on Raspberry Pi for TX and RX pins
   * High performance GPIO driver option with > 100x improvement
   * Arduino Wiring Project System for Visual Studio
   * Updated base OS build
   * Bug Fixes

##Release Notes

Devices running IoT Core may be extremely slow to boot up on the first boot when using some 8GB class 10 SD cards. Slow boot times may be over 15 minutes. Subsequent boots will be much quicker on the affected cards.

The default administrator user name and password are hard coded in the Windows 10 IoT Core image. This is a security risk for the device, and it should not be exposed to an open internet connection until the password has been changed.

The MinnowBoard Max will not boot with builds of Windows 10 IoT Core which are later than 10240 unless the firmware is version .082 or later. The minimum recommended version of the firmware is “MinnowBoard MAX 0.82 32-Bit”. Firmware updates can be downloaded from [http://firmware.intel.com/projects/minnowboard-max](http://firmware.intel.com/projects/minnowboard-max).

The Windows 10 IoT Core image included in this drop supports the peripherals that are exposed on the MinnowBoard MAX board. Subsequently, Intel&reg; will provide support of the full feature set of the Baytrail processors including the Intel Celeron&trade; Processors J1900/N2930/N2807 and Intel Atom&trade; Processors E38XX.

Windows 10 UWP projects created with Visual Studio RC are not compatible with the current Visual Studio release. Users should create a new blank UWP project or Background Application (IoT) project and copy their source code into the new project. 

Windows 10 IoT Core is still being ported to the Raspberry PI. The video driver for the Raspberry PI is still under development, and its performance has not yet been optimized. Animated user elements, such as XAML based drop down menus in particular, may display poorly. 

With this release of Windows 10 IoT Core for the Raspberry Pi 2, support for camera peripheral devices is limited. The PiCam device directly connected to the onboard camera bus is not currently supported, as it requires GPU services that are not currently available on the Raspberry Pi because the DirectX driver has not been implemented. Modern USB webcams produce data streams that are very demanding on the USB Host controller.  Even when used with low resolution settings webcams will require additional USB fine tuning and specialized control logic. We are planning to support a number of USB cameras in the near future and will publish specific information on supported devices as soon as possible.

Hardware volume controls for USB microphones and speakers which depend on Windows system to change system volume are currently not supported on Windows 10 IoT Core.

Some USB keyboards and mice may not work on the Raspberry PI2. Use a different keyboard or mouse. A list of validated peripheral devices can be found on the documentation at [http://go.microsoft.com/fwlink/?LinkId=619428](http://go.microsoft.com/fwlink/?LinkId=619428){:target="_blank"}.

On the Raspberry Pi2 the GPIO pin 0 and GPIO pin 1 were available to user mode applications in the April release of version of Windows 10 IoT Core, but are no longer available. Attempting to open these pins with Windows::Devices::Gpio::GpioController::OpenPin() will return HRESULT_FROM_WIN32(ERROR_NOT_FOUND). GPIO pins 0 and 1 are reserved on the Raspberry Pi by the HAT specification [https://github.com/raspberrypi/hats](https://github.com/raspberrypi/hats) and are under control of VC firmware. For compliance with this specification, these pins should be left unconnected.

##Known Issues

*	Setting the orientation to “Portrait” may not be honored in a Universal App (3039042) WORKAROUND: None
*	GPIO pin 4 may behave unexpectedly when switching between drive modes (3890679) WORKAROUND: If you need to switch drive modes, use a pin other than GPIO 4
*	The Default startup app may conflict with itself when it is also deployed from Visual Studio (4266059). WORKAROUND: Change the default startup app to an application other than that you wish to deploy.
*	GetNetworkUsageAsync may throw a System.UnauthorizedAccessException (1972129). WORKAROUND: None.
*	The SPI driver may return a malformed buffer which includes two extra bytes at the beginning of the buffer for WriteRead sequence on the MinnowBoard Max (3076149) WORKAROUND: Compensate for the extra bytes in the code making the call by allocating a buffer that is x-2 bytes in size.
*	The IoT Core Default Application may display two different IP addresses for the same adapter where one is a stale address. (3303771). WORKAROUND: None.
*	UART1 flow control/serial handshake on MBM may default to ON and cannot be turned off (2995473). WORKAROUND: Use UART2 instead for devices without flow control.
*	A NULL value may be returned by SerialDevice::FromIdAsync() when devices are connected to the top USB port on MinnowBoardMax (2175837) WORKAROUND: Use the bottom USB port.
*	Data breakpoints have been disabled on the Raspberry Pi2 (4266252). WORKAROUND: Data breakpoints will be enabled in a future release.
*	The Azure Active Directory Authentication Library may not work on Windows 10 IoT Core (4266261). WORKAROUND: Do not use the Azure Active Directory Authentication Library.
*	More.com!PAGER::DisplayString may return INVALID_POINTER_READ exception. (1552523) WORKAROUND: None.
*	The time may not sync on devices running IoT Core. (4444681) Manually update the time or programmatically force a time sync.
