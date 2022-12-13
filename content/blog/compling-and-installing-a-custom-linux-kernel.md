# Compiling & Installing A Custom Linux Kernel

Last couple of weeks, i compiled dozens of custom kernels. Some didn’t boot at all, some broke the sound system… Finally i got a kernel i am pretty happy with. Here are what i learnt.

# First of all, WHY

- Remove unused drivers, **boot faster**
- Reduce **power** consumption, increase **performance**
- Get to know your system better
- Use the **newest** kernel

# GET STARTED

- Download the kernel you want to build from [kernel.org](http://kernel.org)
- Extract the tarball via `tar xvf kernel.tar.xz`
- `cd` into the directory `cd kernel/`
- Clear the kernel tree via `make mrproper`
- Generate the kernel configuration via `make localmodconfig`

If you wish, you can pass the configuration section and compile now. `localmodconfig` creates a good-enough configuration. But i think there are a lot room for improvement.

# CONFIGURATION

Open the configuration menu using `make menuconfig` or `make nconfig` .

## IMPORTANT SETTINGS

**General setup**

- **Kernel Compression Mode:** This effects the boot speed. Help messages says LZO is the fastest.
- **System V IPC:** The fakeroot command does not work without it. If you don't need it, i guess you can turn it off.
- **Preemption Model:** This effects power consumption quite a bit. Select 'Desktop' if you have a battery-powered device. I didn't notice much difference between 'Low-Latency Desktop'.

**---**

**Processor Type and Features**

- **Linux Guest Support:** It's safe to disable if you don't run virtual machines or things like that.
- **Timer Frequency:** This effect power consumption a lot too. 300HZ ideal for a battery-powered device in my opinion.
- **CPU Frequency Scaling:** You can set the default governor here.

**---**

**Others**

- **Firmware Drivers / Google Firmware Drivers:** If you don't work on Google's proprietary server's, you can disable this.
- **Virtualization:** You can disable this section completely if you don't run virtual machines.
- **Networking Support/Amateur Radio Support:** Safe to disable if you won't connect your device to an amateur radio.
- **Device Drivers:** This section effects the kernel size and boot speed. There is a lot to configure here. \`localmodconfig\` command disables some unused drivers but there are probably many things you don't need. It is easy to break your sound system, touchpad or network by mistake here.
- **File Systems:** You probably need EXT4 and FAT, others are usually safe to disable. Make sure to backup your system before playing with these.
- **Kernel Hacking:** If you are not planning to work on the linux kernel, you can pretty much disable everything here. It will be harder to track down bugs, but many people never read the logs anyways. Reducing log levels and disabling debugging mechanisms might increase the performance a little bit.

# **INSTALLATION**

First of all, you need some packages to be able to compile the kernel. You can install them with **pacman**

```
$ pacman -S pahole bc base-devel xmlto kmod inetutils libelf git cpio perl tar xz_
```

Resource: [Arch Wiki](https://wiki.archlinux.org/index.php/Kernel/Traditional_compilation#Install_the_core_packages)

Now you can **compile** your custom kernel before installing it. Run `make` command or `make -j X` where X is the number of CPU cores of your device. Setting it more than the CPU cores does no harm and you can set it to less if you want to use your computer during compilation.

**NOTE:** You can specifiy the architecture.

```
# EXAMPLE COMMAND

$ make ARCH=x86_64 -j4
```

After compilation, you should install the modules. Run `make modules_install` as root.

Then copy the `kernel/arch/x86_64/boot/bzImage` to `/boot` and rename it something like `vmlinuz-linux-custom` . It’s a convention to prepend it with `vmlinuz` .

Then, you should create the `initramfs` . You can use `mkinitcpio` for it. Go to `/etc/mkinitcpio.d` folder. There is probably one preset file. Copy it and rename it as you wish, like `linux-custom.preset` . Edit it’s `ALL_kver` variable pointing to your kernel, like `ALL_kver=”/boot/vmlinuz-linux-custom”` . Then edit `default_image` and `fallback_image` . Just change the names. Mine is like this:

```
ALL_config=”/etc/mkinitcpio.conf”
ALL_kver=”/boot/vmlinuz-linux-custom”

PRESETS=(‘default’ ‘fallback’)

#default\_config=”/etc/mkinitcpio.conf”
#default\_options=””
#fallback\_config=”/etc/mkinitcpio.conf”

default\_image=”/boot/initramfs-linux-custom.img”
fallback\_image=”/boot/initramfs-linux-custom-fallback.img”
fallback\_options=”-S autodetect”
```

Now you need to add this custom kernel to the bootloader. If you use Grub or Systemd-Analyze, you must edit their configuration files. If you have a UEFI motherboard, there is no need for them. You can use EFISTUB. Install the `efibootmgr` package and issue this command:

```
# efibootmgr --disk _/dev/DEVICE\_PARTITION_ --part BOOT\_INDEX --create --label "Custom Kernel" --loader /vmlinuz-linux-custom --unicode 'root=UUID=YOUR\_ROOT\_UUID rw initrd=\\initramfs-linux-custom.img'
```

`DEVICE_PARTITION` is usually `sda` or `nvme0n1` . `BOOT_INDEX` is usually 1. You can learn these via `fdisk -l` command. Lastly, to learn `YOUR_ROOD_UUID` run `blkid /dev/DEVICE_PARTITION` command.

---

Good Luck!
